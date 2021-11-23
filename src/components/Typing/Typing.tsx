import React, { useEffect, useRef, useState } from 'react'
import Clock from './../clock/Clock'
import TypingSpeed from '../clock/TypingSpeed'
import useTyping from './useTyping'
import FileUpload from './../file/FileUpload'

const Typing = ({ token, pText }) => {
    const {
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
    } = useTyping({ pText })

    const listItems = oneText.map((number, idx) => {
        let color = {
            color: 'black',
        }
        if (wrongText[idx] == true) {
            color.color = 'black'
        } else if (wrongText[idx] == false && text.length - 1 >= idx) {
            color.color = 'red'
        }
        return (
            <a key={idx} style={color}>
                {number}
            </a>
        )
    })
    // console.log(typingSpeed, backspace)

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
                            style={{
                                fontSize: '16px',
                                position: 'relative',
                                left: '-4px',
                                letterSpacing: '0px',
                                fontFamily: 'Malgun Gothic',
                            }}
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
                    <Clock />
                </div>
                <div>
                    <FileUpload></FileUpload>
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
