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
    const baseTextOrg = props.text.split('\n')
    const baseText = baseTextOrg.filter((baseText) => baseText != '\r')
    const oneText = baseText[bTN].split('')
    let spaceCheak = true
    const it = useRef(null)

    useEffect(() => {
        it.current.focus()
    }, [])

    const listItems = oneText
        .filter((oneText) => {
            if (oneText == ' ') {
                if (spaceCheak == true) {
                    return false
                }
                spaceCheak = true
                return true
            }
            spaceCheak = false
            return true
        })
        .map((number, idx) => <a key={idx}>{number}</a>)

    const handleSubmit = (e) => {
        e.preventDefault()
        // let randomNumber = Math.floor(Math.random() * (16 - 1)) + 1
        if (listItems.length == e.target.inputtext.value.length + 1) {
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
        if (listItems.length == e.target.value.length) {
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
                    <div>{listItems}</div>
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
                    </div>

                    <div>
                        <p>{baseText[bTN + 1]}</p>
                    </div>
                    <div>
                        <p>{baseText[bTN + 2]}</p>
                    </div>
                    <p>타자 속도 : {typingSpeed}</p>
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
