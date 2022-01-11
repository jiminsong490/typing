import React, { useEffect, useRef, useState } from 'react'
import Clock from './../clock/Clock'
import TypingSpeed from '../clock/TypingSpeed'
import useTyping from './useTyping'
import FileUpload from './../file/FileUpload'
import Link from 'next/link'
import SpeedLog from '../clock/SpeedLog'
import Language from '../language/Language'
import Mode from '../mode/Mode'
import Log from '../log/Log'
// import styled from 'styled-components'
import Share from '../kakao/Share'

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

    // const TestDiv = styled.div`
    //     background: yellow;
    //     & div {
    //         color: red;
    //         & span {
    //             color: blue;
    //         }
    //     }
    // `

    const listItems = oneText.map((oneText, idx) => {
        let style = {
            fontFamily: 'inherit',
            fontWeight: 'bold',
            letterSpacing: -0.7,
            display: 'flex : 2',
            color: 'black',
        }
        if (wrongText[idx] == true) {
            style.color = 'green'
        } else if (wrongText[idx] == false && text.length - 1 >= idx) {
            style.color = 'red'
        }
        return (
            <a key={idx} style={style}>
                {oneText}
            </a>
        )
    })
    // console.log(typingSpeed, backspace)

    return (
        <>
            <form onSubmit={handleSubmit} method='post'>
                {/* <TestDiv> */}
                <div>
                    <nav>
                        <Link href='/login'>
                            <a>
                                <input
                                    type='button'
                                    name='login'
                                    value='login'
                                    style={{ display: 'flex:1' }}
                                />
                            </a>
                        </Link>
                        <input
                            type='button'
                            name='logout'
                            value='logout'
                            style={{ display: 'flex:1' }}
                            onClick={handleClick}
                        />
                    </nav>
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
                                position: 'relative',
                                left: '-4px',
                                fontFamily: 'inherit',
                                fontWeight: 'bold',
                                letterSpacing: -0.7,
                                display: 'block',
                                fontSize: 16,
                            }}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                    <div>
                        <p
                            style={{
                                fontFamily: 'inherit',
                                fontWeight: 'bold',
                                letterSpacing: -0.7,
                                display: 'block',
                                color: 'black',
                            }}
                        >
                            {baseText[bTN + 1]}
                        </p>
                    </div>
                    <div>
                        <p
                            style={{
                                fontFamily: 'inherit',
                                fontWeight: 'bold',
                                letterSpacing: -0.7,
                                display: 'block',
                                color: 'black',
                            }}
                        >
                            {baseText[bTN + 2]}
                        </p>
                    </div>
                    <TypingSpeed count={typingCount} backspace={backspace} />
                    <SpeedLog />
                    <Clock />
                </div>
                <div>
                    <FileUpload></FileUpload>
                </div>
                {/* <Share /> */}
                <p>{data.name}</p>
                <Language />
                <Mode />
                <Log />
                {/* </TestDiv> */}
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
