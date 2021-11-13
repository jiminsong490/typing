import { useEffect, useState } from 'react'

const useTime = () => {
    const [time, setTime] = useState(0)
    useEffect(() => {
        setInterval(() => clock(), 50)
    }, [])
    const clock = () => {
        setTime(new Date().getTime())
    }

    const timeString = new Date(time).toLocaleString('ko-KR')
    return { time, timeString }
}
export default useTime
