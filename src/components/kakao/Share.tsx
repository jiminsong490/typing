import { useEffect } from 'react'

interface IProps {
    children: React.ReactNode
}
const Share = () => {
    useEffect(() => {
        window.Kakao.init('869ceaaec4649ed9a6da41413eac0695')
    }, [])
    return (
        <>
            <input type='button' value='공유하기' />
        </>
    )
}
export default Share
