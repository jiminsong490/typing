import useSWR from 'swr'
import XHR from '../components/XHR/XHR'

const ExcuteApi = {
    insertText: async (text) => {
        const response = await XHR('post', 'http://127.0.0.1:3712/exText', {
            text: text,
        })
    },
    randomText: (idx) => {
        const { data, isValidating, error } = useSWR(
            `http://127.0.0.1:3712/randomText?text=${idx}`
        )
        const text = data?.text
        return text
    },
    insertFile: async (file) => {
        const response = await XHR(
            'post',
            'http://127.0.0.1:3712/fileUpload',
            file
        )
    },
    signup: async (email, password, tel, username) => {
        const response = await XHR('post', 'http://127.0.0.1:3714/signup', {
            email: email,
            password: password,
            tel: tel,
            username: username,
        })
        if (response.data.success) {
            alert('회원가입이 성공적으로 완료되었습니다')
            location.href = 'http://localhost:3000/test'
        } else {
            alert('회원가입이 실패하였습니다. 다시 입력해주세요')
            location.reload()
        }
    },
    delete: async (email, password) => {
        const response = await XHR('delete', 'http://127.0.0.1:3714/delete', {
            email: email,
            password: password,
        })
        if (response.data.success == true) {
            alert('계정이 성공적으로 탈퇴되었습니다.')
            location.href = 'http://localhost:3000/test'
        } else {
            const errorMsg = response.data.errorMsg
            alert(
                `다음과 같은 에러가 발생하여 계정이 성공적으로 탈퇴되지 않았습니다:\n${errorMsg}`
            )
            location.reload()
        }
    },
    change: async (email, password, change) => {
        const response = await XHR('put', 'http://127.0.0.1:3714/put', {
            email: email,
            password: password,
            changePassword: change,
        })
        if (response.data.success == true) {
            alert('비밀번호가 성공적으로 변경되었습니다.')
            location.href = 'http://localhost:3000/test'
        } else {
            const errorMsg = response.data.errorMsg
            alert(`${errorMsg}`)
        }
    },
    find: async (tel, username) => {
        const response = await XHR(
            'get',
            `http://127.0.0.1:3714/findall?tel=${tel}&username=${username}`
        )
        if (response.data.result) alert(`아이디 : ${response.data.email}`)
        else alert('계정을 찾을 수 없습니다. 다시 입력해주세요.')
    },
    login: async (email, password) => {
        const response = await XHR('post', 'http://127.0.0.1:3714/login', {
            email: email,
            password: password,
        })
        if (response.data.result) {
            const token = response.data.token
            document.cookie = `token=${token}`
            location.reload()
        } else {
            alert('계정을 찾을 수 없습니다. 다시 입력해주세요.')
            location.reload()
        }
    },
}
export default ExcuteApi
