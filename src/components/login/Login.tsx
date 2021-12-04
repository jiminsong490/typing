import useSWR from 'swr'
import ExcuteApi from '../../apis/ExcuteApi'
import { fetcher } from '../../pages/_app'
import IdAndPw from './IdAndPw'
import OtherFuntion from './OtherFuntion'

const Login = ({ token }) => {
    const data = ExcuteApi.getToken(token)
    return (
        <>
            <IdAndPw />

            <OtherFuntion />

            <p>{data.name}</p>
        </>
    )
}
export default Login
