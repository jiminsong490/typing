import { useEffect, useState } from 'react'

const useTime = () => {
    const [time, setTime] = useState(0)
    const clock = () => {
        setTime(new Date().getTime())
    }
    useEffect(() => {
        const asd = setInterval(() => clock(), 50)
        return () => clearInterval(asd)
    }, [])

    const timeString = new Date(time).toLocaleString('ko-KR')
    return { time, timeString }
}
export default useTime
