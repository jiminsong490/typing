import { useEffect, useState } from 'react'
import useTime from './../../hooks/useTime'
import SpeedLog from './SpeedLog'

const TypingSpeed = (props) => {
    const [speed, setSpeed] = useState(0)
    const [start, setStart] = useState(new Date())
    const [end, setEnd] = useState(new Date())
    const [seconds, setSeconds] = useState(0)
    const { time } = useTime()

    useEffect(() => {
        props.count != 0 ? setEnd(new Date()) : setStart(new Date())

        setSeconds(Math.abs((end.getTime() - start.getTime()) * 0.001))
        setSpeed((props.count * 60) / seconds - 10 * props.backspace)
        // console.log(
        //     `speed : ${props.count} * ${60}) / ${seconds} = ${
        //         (props.count * 60) / seconds
        //     }`
        // )
    }, [time, props.count])

    return (
        <>
            <p>타자 속도 : {String(Math.round(speed))}</p>
            <SpeedLog speed={String(Math.round(speed))} />
        </>
    )
}

export default TypingSpeed
