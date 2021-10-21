import React, { useState } from 'react'
import ExcuteApi from '../../apis/ExcuteApi'
import Inputtool from '../input/Inputtool'
import Link from 'next/link'
import GoalText from './../goalText/GoalText'
import useSWR from 'swr'
import typing from './../../pages/typing'
import TextareaTool from '../textarea/TextareaTool'

const Typing = (props) => {
    const [idx1, setIdx1] = useState(80)
    const [idx2, setIdx2] = useState(30)

    // const a = ExcuteApi.randomText(2)
    const handleSubmit = (e) => {
        e.preventDefault()
        let randomNumber = Math.floor(Math.random() * (16 - 1)) + 1

        // if(e.target.typing.value==e.)
    }

    return (
        <>
            <header>
                <div>
                    <p>로고</p>
                </div>
                <nav>
                    <section>
                        <input type='button' value='언어' />
                    </section>
                    <section>
                        <input type='button' value='파일 업로드' />
                    </section>
                    <section>
                        <input type='button' value='공유' />
                    </section>
                </nav>
            </header>
            <main>
                <form method='post' onSubmit={handleSubmit}>
                    <div>
                        <TextareaTool name='typing' cols={idx1} rows={idx2} />
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
            </main>
        </>
    )
}

// Typing.getInitialProps = () => {
//     const { text } = ExcuteApi.randomText
//     console.log(ExcuteApi.randomText)
//     return { text }
// }

export default Typing
