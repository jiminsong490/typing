import React, { useState } from 'react'
import useSWR from 'swr'
import ExcuteApi from '../../apis/ExcuteApi'

const Inputtool = (props) => {
    let idx = props.presentText
    let nextIdx = props.nextText
    // const a = ExcuteApi.randomText(idx, nextIdx)
    // console.log(a.presentText)
    // console.log(a.nextText)
    // console.log(idx, nextIdx)

    const [text, setText] = useState('')
    const [typingCount, setCount] = useState(0)
    const [typingSpeed, setSpeed] = useState(0)
    const [backspace, setBack] = useState(1)
    const [start, setStart] = useState(new Date())
    const [end, setEnd] = useState(new Date())
    const [seconds, setSeconds] = useState(0)
    // const [presentText, setpText] = useState(a?.presentText)
    // const [nextText, setnText] = useState(a?.nextText)

    const handleChange = (e) => {
        e.preventDefault()
        setEnd(new Date())
        setSeconds(end.getSeconds() - start.getSeconds())

        console.log(seconds)
        setText(e.target.value)
        setCount(typingCount + 1)
        setSpeed((typingCount * 60) / seconds - 20 * backspace)

        // console.log(typingSpeed)
        if (props.text?.length + 1 == e.target.value.length) {
            setText('')
            setCount(0)
            setBack(1)
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
            {/* <div>
                <p>{presentText}</p>
            </div> */}
            <div>
                <input
                    id={props.id}
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

            {/* <div>
                <p>NEXT : {nextText}</p>
            </div> */}
            <div>
                <p>{typingSpeed}</p>
            </div>
            <div>{/* <p>{start}</p> */}</div>
        </>
    )
}
export default Inputtool
