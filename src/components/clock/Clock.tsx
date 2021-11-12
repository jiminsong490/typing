import { useEffect, useState } from 'react'

const Clock = (props) => {
    const [time, setTime] = useState('')
    useEffect(() => {
        const intervalId = setInterval(() => clock(), 100)
        return () => clearInterval(intervalId)
    }, [])
    const clock = () => {
        setTime(String(new Date()))
        // console.log(time)
        // console.log(time)
    }
    const handlechange = (e) => {
        console.log(e)
    }

    return <p onChange={handlechange}>{time}</p>
}
export default Clock
