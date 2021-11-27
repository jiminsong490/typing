import useSWR from 'swr'
import { fetcher } from '../../pages/_app'
import IdAndPw from './IdAndPw'
import OtherFuntion from './OtherFuntion'

const Login = ({ token }) => {
    const { data, isValidating, error } = useSWR(
        ['http://localhost:3712/checktoken', token],
        (url, token) => fetcher(url, { token })
    )
    const a = data
    const handleSubmit = (e) => {}
    return (
        <>
            <IdAndPw />

            <OtherFuntion />

            <p>{a}</p>
        </>
    )
}
export default Login
