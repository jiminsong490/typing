import React, { useRef } from 'react'
import { useState } from 'react'
import ExcuteApi from '../../apis/ExcuteApi'
import triggerEvent from 'trigger-event'

const TextareaTool = (props) => {
    const [text, setText] = useState(props.exCode)
    const [csPoint, setCsPoint] = useState(0)
    const cursor = useRef(null)
    const cs = cursor.current

    const handleChange = (e) => {
        e.preventDefault()
        // let cursor = text + exCode.text
        // setText(e.target.value)
        if (
            e.nativeEvent.inputType == 'insertText' ||
            e.nativeEvent.inputType == 'insertCompositionText'
        )
            setCsPoint(csPoint + 1)

        console.log(e.target.value)
        // if()
    }
    const handleClick = (e) => {
        cs.selectionStart = csPoint
        cs.selectionEnd = csPoint
    }
    const handleKeyPress = (e) => {
        // console.log(e)

        if (e.keyCode === 8 && csPoint > 0) {
            setCsPoint(csPoint - 1)
        }
    }

    return (
        <>
            <div>
                <textarea
                    ref={cursor}
                    name={props.name}
                    cols={props.cols}
                    rows={props.rows}
                    value={text}
                    onChange={handleChange}
                    onClick={handleClick}
                    onMouseDown={handleClick}
                    onKeyDown={handleKeyPress}
                ></textarea>
            </div>
        </>
    )
}
export default TextareaTool
