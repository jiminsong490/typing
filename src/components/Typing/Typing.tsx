import React, { useEffect, useRef, useState } from 'react'
import Clock from './../clock/Clock'
import TypingSpeed from '../clock/TypingSpeed'
import useTyping from './useTyping'
import FileUpload from './../file/FileUpload'
import Link from 'next/link'
import SpeedLog from '../clock/SpeedLog'
import Share from '../kakao/Share'
import Language from '../language/Language'
import Mode from '../mode/Mode'

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
        data,
        handleClick,
    } = useTyping({ pText, token })

    const listItems = oneText.map((oneText, idx) => {
        let color = {
            color: 'black',
        }
        if (wrongText[idx] == true) {
            color.color = 'green'
        } else if (wrongText[idx] == false && text.length - 1 >= idx) {
            color.color = 'red'
        }
        return (
            <a key={idx} style={color}>
                {oneText}
            </a>
        )
    })
    // console.log(typingSpeed, backspace)

    return (
        <>
            <form
                onSubmit={handleSubmit}
                method='post'
                encType='multipart/form-data'
            >
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
                    <SpeedLog />
                    <Clock />
                </div>
                <div>
                    <FileUpload></FileUpload>
                </div>
                <Link href='/login'>
                    <a>
                        <input type='button' name='login' value='login' />
                    </a>
                </Link>
                <input
                    type='button'
                    name='logout'
                    value='logout'
                    onClick={handleClick}
                />
                <Share />
                <p>{data.name}</p>
                <Language />
                <Mode />
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
