import { useDispatch } from './../../redux/hooks'
import { useEffect, useRef, useState } from 'react'
import useSWR from 'swr'
import ExcuteApi from '../../apis/ExcuteApi'
import { fetcher } from '../../pages/_app'
import { useSelector } from '../../redux/hooks'
import { updateSubmit } from '../../redux/rootReducer'

const useTyping = ({ pText, token }) => {
    const [text, setText] = useState([])
    const [typingCount, setCount] = useState(0)
    const [backspace, setBack] = useState(0)
    const [bTN, setbTn] = useState(0)
    const [csPoint, setCsPoint] = useState(0)
    const [wrongText, setWrongText] = useState([])
    const [keyCD, setKeyCD] = useState(Number)

    const dispatch = useDispatch()

    const baseTextOrg = pText.split('\n')
    const baseText = baseTextOrg.filter((baseText) => baseText != '\r')
    let spaceCheak = true
    const oneText = baseText[bTN].split('').filter((baseText) => {
        if (baseText == ' ') {
            if (spaceCheak == true) {
                return false
            }
            spaceCheak = true
            return true
        }
        spaceCheak = false
        return true
    })

    const data = ExcuteApi.getToken(token)

    const it = useRef(null)
    useEffect(() => {
        it.current.focus()
    }, [])

    const hardMode = useSelector((store) => store.hardMode)

    const handleSubmit = (e) => {
        e.preventDefault()
        // let randomNumber = Math.floor(Math.random() * (16 - 1)) + 1
        if (oneText.length == e.target.inputtext.value.length + 1) {
            setText([])
            setCount(0)
            setBack(0)
            setbTn(bTN + 1)
            setCsPoint(0)
            setWrongText([])
            dispatch(updateSubmit(true))
        }
    }

    const handleChange = (e) => {
        e.preventDefault()
        if (hardMode && keyCD == 8) return
        setText(e.target.value)
        setWrongText([])

        oneText.filter((asd, idx, oT) => {
            oT[idx] == e.target.value[idx]
                ? setWrongText((wrongText) => [...wrongText, true])
                : setWrongText((wrongText) => [...wrongText, false])
        })

        // setWrongText(CheakWrong(oneText, text))

        setCount(typingCount + 1)
        // console.log(listItems.length, e.target.value.length)
        if (
            e.nativeEvent.inputType == 'insertText' ||
            e.nativeEvent.inputType == 'insertCompositionText'
        ) {
            setCsPoint(csPoint + 1)
            if (oneText.length == e.target.value.length) {
                setText([])
                setCount(0)
                setBack(0)
                setbTn(bTN + 1)
                setCsPoint(0)
                setWrongText([])
                dispatch(updateSubmit(true))
            }

            // console.log(oneText.length, e.target.value.length)
        }
    }

    const handleKeyDown = (e) => {
        // console.log(e.keyCode)
        if (e.keyCode === 8 && csPoint > 0) {
            setCsPoint(csPoint - 1)
            setBack(backspace + 1)
        }
        if (hardMode && e.keyCode === 8) {
            setKeyCD(8)
        } else setKeyCD(e.keyCode)
    }

    const handleClick = (e) => {
        document.cookie =
            document.cookie + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;'
        location.reload()
    }

    return {
        oneText,
        wrongText,
        text,
        handleSubmit,
        it,
        handleChange,
        handleKeyDown,
        baseText,
        bTN,
        typingCount,
        backspace,
        data,
        handleClick,
    }
}
export default useTyping
