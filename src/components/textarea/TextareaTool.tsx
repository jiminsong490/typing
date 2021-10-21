import React, { useRef } from 'react'
import { useState } from 'react'
import ExcuteApi from '../../apis/ExcuteApi'
const TextareaTool = (props) => {
    const exCode = ExcuteApi.randomText(2)
    const [text, setText] = useState(`${exCode?.text}`)
    const cursor = useRef(null)
    const cs = cursor.current
    React.useEffect(() => {
        setText(`${exCode?.text}`)
    }, [exCode?.text])
    // console.log(text)
    const handleChange = (e) => {
        e.preventDefault()
        // let cursor = text + exCode.text
        setText(e.target.value)
        cs.defaultValue = 'ds'
        console.log(cursor)
        // if()
    }
    const handleClick = (e) => {
        cs.draggable = false
        cs.selectionStart = 0
        cs.selectionEnd = 0
    }
    const handleMouseDown = (e) => {
        console.log('asd')
        // cs.readOnly = true
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
                    onMouseDown={handleMouseDown}
                ></textarea>
            </div>
        </>
    )
}
export default TextareaTool
