import { useRouter } from 'next/dist/client/router'
import ExcuteApi from '../../apis/ExcuteApi'

const FindID = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const tel = e.target.tel.value
        const username = e.target.username.value
        ExcuteApi.find(tel, username)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type='tel'
                    name='tel'
                    placeholder='전화번호를 입력해주세요.'
                />
                <input
                    type='text'
                    name='username'
                    placeholder='이름을 입력해주세요.'
                />
                <input type='submit' />
            </form>
        </>
    )
}
export default FindID
