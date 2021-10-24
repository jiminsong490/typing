import React, { useState } from 'react'
import ExcuteApi from '../../apis/ExcuteApi'
import Inputtool from '../input/Inputtool'
import Link from 'next/link'
import GoalText from './../goalText/GoalText'
import useSWR from 'swr'
import typing from './../../pages/typing'

const Typing = (props) => {
    const [idx1, setIdx1] = useState('2')

    const typingText = ExcuteApi.randomText(idx1)
    // const a = typingText.text
    // console.log(typeof a)
    // const first = a.split('\n')
    const handleSubmit = (e) => {
        e.preventDefault()
        let randomNumber = Math.floor(Math.random() * (16 - 1)) + 1
        if (e.target.typing.value.length == typingText.text.length) {
            console.log('ddd')
        }

        // if(e.target.typing.value==e.)
    }

    return (
        <>
            <form method='post' onSubmit={handleSubmit}>
                <div>
                    <p>{typingText.text}</p>
                </div>
                <div>
                    {typingText && typingText != undefined}
                    <Inputtool
                        name='typing'
                        type='text'
                        placeholder='위에 보이는 문장을 따라 타이핑해보세요.'
                        size='50'
                        autocomplete='off'
                        autofocus='on'
                        text={typingText.text}
                    />
                </div>
                <div>{/* <p>NEXT : {a.nextText}</p> */}</div>
                <br />
                <div>
                    <Link href='/insertTextPage'>
                        <a>
                            <input type='button' value='텍스트 입력' />
                        </a>
                    </Link>
                </div>
                <div>
                    <p>타자 속도 : {}</p>
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
