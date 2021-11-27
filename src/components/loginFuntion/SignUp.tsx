import ExcuteApi from '../../apis/ExcuteApi'

const SignUp = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const tel = e.target.tel.value
        const username = e.target.username.value
        ExcuteApi.signup(email, password, tel, username)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type='email'
                    name='email'
                    placeholder='이메일을 입력하여주십시오.'
                />
                <input
                    type='password'
                    name='password'
                    placeholder='비밀번호를 입력하여주십시오.'
                />
                <input
                    type='tel'
                    name='tel'
                    placeholder='전화번호를 입력하여주십시오.'
                />
                <input
                    type='text'
                    name='username'
                    placeholder='이름을 입력하여주십시오.'
                />
                <input type='submit' value='회원가입' />
            </form>
        </>
    )
}
export default SignUp
