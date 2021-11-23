import useSWR from 'swr'
import { fetcher } from '../../pages/_app'
import IdAndPw from './idAndPw'
import OtherFuntion from './OtherFuntion'

const Login = ({ token }) => {
    const { data, isValidating, error } = useSWR(
        ['http://localhost:3714/cheaktoken', token],
        (url, token) => fetcher(url, { token })
    )
    const a = data
    const handleSubmit = () => {}
    return (
        <>
            <div>
                <IdAndPw />
            </div>
            <div>
                <OtherFuntion />
            </div>
            <div>
                <p>{a}</p>
            </div>
        </>
    )
}
export default Login
