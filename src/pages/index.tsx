import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'

const index = () => {
    const router = useRouter()

    useEffect(() => {
        router.push('/typing')
    })
    return (
        <>
            <p></p>
        </>
    )
}
export default index
