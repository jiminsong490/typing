import React from 'react'
import { useEffect } from 'react'

interface IProps {
    children: React.ReactNode
}
const Share = () => {
    useEffect(() => {
        window.Kakao.init('869ceaaec4649ed9a6da41413eac0695')
    }, [])
    const handleClick = () => {
        const { Kakao, location } = window
        Kakao.Link.sendScrap({
            requestUrl: location.href,
        })
    }
    return (
        <>
            <input type='button' value='공유하기' onClick={handleClick} />
        </>
    )
}
export default React.memo(Share)
