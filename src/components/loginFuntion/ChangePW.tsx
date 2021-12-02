import ExcuteApi from '../../apis/ExcuteApi'

const ChangePW = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const change = e.target.changePassword.value
        const asd = ExcuteApi.change(email, password, change)
        console.log(asd)
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
                <input
                    type='password'
                    name='changePassword'
                    placeholder='변경할 비밀번호를 입력해주세요.'
                />
            </form>
        </>
    )
}
export default ChangePW
