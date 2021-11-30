import { useRouter } from 'next/dist/client/router'
import ExcuteApi from '../../apis/ExcuteApi'

const DeleteID = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        ExcuteApi.delete(email, password)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type='email'
                    name='email'
                    placeholder='이메일을 입력해주세요.'
                />
                <input
                    type='password'
                    name='password'
                    placeholder='비밀번호를 입력해주세요.'
                />
                <input type='submit' />
            </form>
        </>
    )
}
export default DeleteID
