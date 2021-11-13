import { useEffect, useState } from 'react'
import useTime from './../../hooks/useTime'

const Clock = (props) => {
    const { timeString } = useTime()

    return <p>{timeString}</p>
}
export default Clock
