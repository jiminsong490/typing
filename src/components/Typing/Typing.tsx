import React, { useEffect, useRef, useState } from 'react'
import ExcuteApi from '../../apis/ExcuteApi'

import Link from 'next/link'
import GoalText from '../goalText/GoalText'
import CheakWrong from './../../Funtion/CheakWrong'
import Clock from './../clock/Clock'
import TypingSpeed from '../clock/TypingSpeed'

const Typing = (props) => {
    const [idx1, setIdx1] = useState('2')

    const [text, setText] = useState([])
    const [typingCount, setCount] = useState(0)
    const [typingSpeed, setSpeed] = useState(0)
    const [backspace, setBack] = useState(1)
    const [start, setStart] = useState(new Date())
    const [end, setEnd] = useState(new Date())
    const [seconds, setSeconds] = useState(0)
    const [bTN, setbTn] = useState(0)
    const [csPoint, setCsPoint] = useState(0)
    const [wrongText, setWrongText] = useState([])

    const typingText = ExcuteApi.randomText(idx1)
    const baseTextOrg = props.text.split('\n')
    const baseText = baseTextOrg.filter((baseText) => baseText != '\r')
    let spaceCheak = true
    let color = {
        color: 'black',
    }
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

    const it = useRef(null)
    useEffect(() => {
        it.current.focus()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        // let randomNumber = Math.floor(Math.random() * (16 - 1)) + 1
        if (oneText.length == e.target.inputtext.value.length + 1) {
            setText([])
            setCount(0)
            setBack(1)
            setbTn(bTN + 1)
            setCsPoint(0)
            setWrongText([])
        }
    }

    const handleChange = (e) => {
        e.preventDefault()
        setEnd(new Date())
        setSeconds(end.getSeconds() - start.getSeconds())
        setText(e.target.value)
        setWrongText([])

        undefined != text[text.length - 1] &&
        oneText[text.length - 1] == text[text.length - 1]
            ? setWrongText((wrongText) => [...wrongText, true])
            : setWrongText((wrongText) => [...wrongText, false])

        // oneText.filter((asd, idx, oT) => {
        //     oT[idx] == text[idx]
        //         ? setWrongText((wrongText) => [...wrongText, true])
        //         : setWrongText((wrongText) => [...wrongText, false])
        // })

        // setWrongText(CheakWrong(oneText, text))

        setCount(typingCount + 1)
        setSpeed((typingCount * 60) / seconds - 20 * backspace)
        // console.log(listItems.length, e.target.value.length)
        if (
            e.nativeEvent.inputType == 'insertText' ||
            e.nativeEvent.inputType == 'insertCompositionText'
        ) {
            setCsPoint(csPoint + 1)
            if (oneText.length == e.target.value.length) {
                setText([])
                setCount(0)
                setBack(1)
                setbTn(bTN + 1)
                setCsPoint(0)
                setWrongText([])
            }

            // console.log(oneText.length, e.target.value.length)
        }
        if (text.length == 0) {
            setStart(new Date())
        }
    }

    const handleKeyDown = (e) => {
        // console.log(e.keyCode)

        if (e.keyCode === 8 && csPoint > 0) {
            setCsPoint(csPoint - 1)
            setBack(backspace + 1)
        }
    }

    // console.log(wrongText)
    const listItems = oneText.map((number, idx) => {
        // console.log(wrongText[idx], color.color)
        if (wrongText[idx] == true) {
            color.color = 'black'
        } else if (wrongText[idx] == false) {
            color.color = 'red'
        }
        // console.log(color)
        return (
            <a key={idx} style={color}>
                {number}
            </a>
        )
    })
    // console.log(listItems)

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>{listItems}</div>
                    <div>
                        <input
                            ref={it}
                            type='text'
                            name='inputtext'
                            value={text}
                            size={50}
                            placeholder='위에 보이는 문장을 따라 타이핑해보세요.'
                            autoComplete='off'
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                        />
                    </div>

                    <div>
                        <p>{baseText[bTN + 1]}</p>
                    </div>
                    <div>
                        <p>{baseText[bTN + 2]}</p>
                    </div>
                    <TypingSpeed count={typingCount} backspace={backspace} />
                    <p>타자 속도 : {Math.round(typingSpeed)}</p>
                    <Clock />
                </div>
                <br />
                <div>
                    <Link href='/insertTextPage'>
                        <a>
                            <input type='button' value='텍스트 입력' />
                        </a>
                    </Link>
                </div>
            </form>
        </>
    )
}

// Typing.getInitialProps = () => {
//     const { text } = ExcuteApi.randomText
//     console.log(ExcuteApi.randomText)
//     return { text }
// }

export default Typing
