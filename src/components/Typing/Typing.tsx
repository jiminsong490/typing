import React, { useState } from 'react'
import ExcuteApi from '../../apis/ExcuteApi'
import Inputtool from '../input/Inputtool'
import Link from 'next/link'
import GoalText from './../goalText/GoalText'
import useSWR from 'swr'
import typing from './../../pages/typing'

const Typing = (props) => {
    const [idx1, setIdx1] = useState('2')
    const [idx2, setIdx2] = useState('1')

    const a = ExcuteApi.randomText(idx1, idx2)

    const handleSubmit = (e) => {
        e.preventDefault()
        let randomNumber = Math.floor(Math.random() * (16 - 1)) + 1
        if (idx2 == `${randomNumber}`) {
            randomNumber = Math.floor(Math.random() * (16 - 1)) + 1
        }

        if (e.target.typing.value.length == a.presentText.length) {
            console.log('ddd')
            setIdx1(`${idx2}`)
            setIdx2(`${randomNumber}`)
        }

        // if(e.target.typing.value==e.)
    }

    return (
        <>
            <form method='post' onSubmit={handleSubmit}>
                <div>
                    <p>{a.presentText}</p>
                </div>
                <div>
                    <Inputtool
                        name='typing'
                        type='text'
                        placeholder='위에 보이는 문장을 따라 타이핑해보세요.'
                        size='50'
                        autocomplete='off'
                        presentText={idx1}
                        nextText={idx2}
                        text={a.presentText}
                    />
                </div>
                <div>
                    <p>NEXT : {a.nextText}</p>
                </div>
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
