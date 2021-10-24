import React, { useEffect, useRef, useState } from 'react'
import ExcuteApi from '../../apis/ExcuteApi'

import Link from 'next/link'

const Typing = (props) => {
    const [idx1, setIdx1] = useState('2')

    const [text, setText] = useState('')
    const [typingCount, setCount] = useState(0)
    const [typingSpeed, setSpeed] = useState(0)
    const [backspace, setBack] = useState(1)
    const [start, setStart] = useState(new Date())
    const [end, setEnd] = useState(new Date())
    const [seconds, setSeconds] = useState(0)
    const [bTN, setbTn] = useState(0)

    const typingText = ExcuteApi.randomText(idx1)
    const baseText = props.text.split('\n')

    const it = useRef(null)

    useEffect(() => {
        it.current.focus()
    }, [])

    const listItems = baseText.map((number, idx) => <li key={idx}>{number}</li>)
    console.log(listItems)

    const handleSubmit = (e) => {
        e.preventDefault()
        // let randomNumber = Math.floor(Math.random() * (16 - 1)) + 1
        if (baseText[bTN].length == e.target.inputtext.value.length + 1) {
            setText('')
            setCount(0)
            setBack(1)
            setbTn(bTN + 1)
        }
    }

    const handleChange = (e) => {
        e.preventDefault()
        setEnd(new Date())
        setSeconds(end.getSeconds() - start.getSeconds())

        // console.log(seconds)
        setText(e.target.value)
        setCount(typingCount + 1)
        setSpeed((typingCount * 60) / seconds - 20 * backspace)
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

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        {listItems}
                        <p>1 : {baseText[bTN]}</p>
                    </div>
                    <div>
                        <input
                            ref={it}
                            type='text6'
                            name='inputtext'
                            value={text}
                            size={50}
                            placeholder='위에 보이는 문장을 따라 타이핑해보세요.'
                            autoComplete='off'
                            onChange={handleChange}
                        />
                        <p>타자 속도 : {typingSpeed}</p>
                    </div>

                    <div>
                        <p>2 : {baseText[bTN + 1]}</p>
                    </div>
                    <div>
                        <p>3 : {baseText[bTN + 2]}</p>
                    </div>
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
        </>
    )
}

// Typing.getInitialProps = () => {
//     const { text } = ExcuteApi.randomText
//     console.log(ExcuteApi.randomText)
//     return { text }
// }

export default Typing
