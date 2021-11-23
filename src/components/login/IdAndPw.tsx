import ExcuteApi from '../../apis/ExcuteApi'
import { useState } from 'react'

const IdAndPw = () => {
    // const [email, setEmail] = useState()
    // const [password, setPassword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        ExcuteApi.login(email, password)
        console.log(email, password)
    }
    const handleClick = () => {
        document.cookie =
            document.cookie + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;'
        location.reload()
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        아이디 :{' '}
                        <input
                            type='text'
                            placeholder='아이디를 입력해주세요.'
                        />
                    </label>
                    <label>
                        비밀번호 :{' '}
                        <input
                            type='password'
                            placeholder='비밀번호를 입력해주세요.'
                        />
                    </label>
                    <input type='submit' value='login' />
                    <input type='button' value='logout' onClick={handleClick} />
                </div>
            </form>
        </>
    )
}
export default IdAndPw
