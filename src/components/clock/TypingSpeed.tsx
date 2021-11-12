import { useEffect, useState } from 'react'

const TypingSpeed = (props) => {
    const [typingCount, setCount] = useState(0)
    const [typingSpeed, setSpeed] = useState(0)
    const [backspace, setBack] = useState(1)
    const [start, setStart] = useState(new Date())
    const [end, setEnd] = useState(new Date())
    const dd = props.count
    useEffect(() => {
        const intervalId = setInterval(() => asd(), 100)
        return () => clearInterval(intervalId)
    }, [])

    const asd = () => {
        setSpeed(typingSpeed)
        // console.log(dd)
    }

    return <p>타자 속도 : {typingSpeed}</p>
}

export default TypingSpeed
