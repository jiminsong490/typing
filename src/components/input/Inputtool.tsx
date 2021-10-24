import React, { useEffect, useRef, useState } from 'react'
import useSWR from 'swr'
import ExcuteApi from '../../apis/ExcuteApi'
import GoalText from '../goalText/GoalText'

const Inputtool = (props) => {
    const [text, setText] = useState('')
    const [typingCount, setCount] = useState(0)
    const [typingSpeed, setSpeed] = useState(0)
    const [backspace, setBack] = useState(1)
    const [start, setStart] = useState(new Date())
    const [end, setEnd] = useState(new Date())
    const [seconds, setSeconds] = useState(0)
    const [bTN, setbTn] = useState(0)

    const it = useRef(null)

    useEffect(() => {
        it.current.focus()
    }, [])

    const baseText = props.text.split('\n')
    // console.log(a[0])

    const handleChange = (e) => {
        e.preventDefault()
        setEnd(new Date())
        setSeconds(end.getSeconds() - start.getSeconds())

        // console.log(seconds)
        setText(e.target.value)
        setCount(typingCount + 1)
        setSpeed((typingCount * 60) / seconds - 20 * backspace)
        console.log(baseText[bTN].length, e.target.value.length)
        // console.log(typingSpeed)
        if (baseText[bTN].length == e.target.value.length) {
            setText('')
            setCount(0)
            setBack(1)
            setbTn(bTN + 1)
        } else if (text == '') {
            setStart(new Date())
        }
        // setpText(a?.presentText)
        // setnText(a?.nextText)
        // if (presentText?.length + 1 == e.target.value.length) {
        //     setText('')
        //     setpText(a.nextText)
        //     setnText(a.nextText)
        // }
    }
    const handleKeyDown = (e) => {
        // console.log(event)

        if (e.keyCode === 8) {
            setBack(backspace + 1)
            console.log(backspace)
        }
    }

    return (
        <>
            <div>
                <p>1 : {baseText[bTN]}</p>
            </div>
            <div>
                <input
                    ref={it}
                    type={props.type}
                    name={props.name}
                    value={text}
                    size={props.size}
                    placeholder={props.placeholder}
                    autoComplete={props.autocomplete}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
            </div>

            <div>
                <p>2 : {baseText[bTN + 1]}</p>
            </div>
            <div>
                <p>3 : {baseText[bTN + 2]}</p>
            </div>
            <div>
                <p>타자 속도 : {typingSpeed}</p>
            </div>
            <div>{/* <p>{start}</p> */}</div>
        </>
    )
}
export default Inputtool
