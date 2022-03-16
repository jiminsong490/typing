import React from 'react'
import { useEffect } from 'react'
import { KakaoIcon } from './style'
interface IProps {
    children: React.ReactNode
}

const Share = () => {
    useEffect(() => {
        if (!window.Kakao.isInitialized()) {
            window.Kakao.init('869ceaaec4649ed9a6da41413eac0695')
        }
    }, [])
    const handleClick = () => {
        const { Kakao, location } = window
        Kakao.Link.sendScrap({
            requestUrl: location.href,
        })
    }
    return (
        <>
            <a onClick={handleClick}>
                <KakaoIcon src='/kakao.png' />
            </a>
        </>
    )
}
export default React.memo(Share)
function useScript(arg0: string) {
    throw new Error('Function not implemented.')
}
