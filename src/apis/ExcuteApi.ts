import { useRouter } from 'next/dist/client/router'
import useSWR from 'swr'
import { fetcher } from '../pages/_app'
import XHR from './XHR'

const apiAddress =
    process.env.APP_ENV === 'production'
        ? 'http://typing.jiminproject.com'
        : 'http://localhost'

const ExcuteApi = {
    insertText: async (text) => {
        const response = await XHR('post', `${apiAddress}:3712/exText`, {
            text: text,
        })
    },
    randomText: (language) => {
        console.log(
            'encode : ',
            encodeURI(language),
            '    language : ',
            language
        )
        const { data, isValidating, error } = useSWR(
            `${apiAddress}:3712/randomText?language=${encodeURI(language)}`
        )
        console.log('EX')
        const text = data?.text
        return text
    },
    getToken: (token) => {
        interface IToken {
            name: String
            email: String
        }
        const { data, isValidating, error } = useSWR<IToken>(
            [`${apiAddress}:3712/checktoken`, token],
            (url, token) => fetcher(url, { token })
        )
        const name = data?.name
        const email = data?.email
        return { name: name, email: email }
    },

    insertFile: async (file) => {
        const response = await XHR(
            'post',
            `${apiAddress}:3712/fileUpload`,
            file
        )
    },
    signup: async (email, password, tel, username) => {
        interface ISignUp {
            success: boolean
        }
        const response = await XHR<ISignUp>(
            'post',
            `${apiAddress}:3712/signup`,
            {
                email: email,
                password: password,
                tel: tel,
                username: username,
            }
        )
        console.log(response)
        if (response.data.success) {
            alert('회원가입이 성공적으로 완료되었습니다')
        } else {
            alert('회원가입이 실패하였습니다. 다시 입력해주세요')
            location.reload()
        }
    },
    delete: async (email, password) => {
        interface IDelete {
            success: boolean
            errorMsg: String
        }
        const response = await XHR<IDelete>(
            'delete',
            `${apiAddress}:3712/delete`,
            {
                email: email,
                password: password,
            }
        )
        if (response.data.success == true) {
            alert('계정이 성공적으로 탈퇴되었습니다.')
            location.href = `${apiAddress}:3712/login`
        } else {
            const errorMsg = response.data.errorMsg
            alert(
                `다음과 같은 에러가 발생하여 계정이 성공적으로 탈퇴되지 않았습니다:\n${errorMsg}`
            )
            location.reload()
        }
    },
    change: async (email, password, change) => {
        interface IChange {
            success: boolean
            errorMsg: String
        }
        const response = await XHR<IChange>(
            'put',
            `${apiAddress}:3712/change`,
            {
                email: email,
                password: password,
                changePassword: change,
            }
        )
        if (response.data.success == true) {
            alert('비밀번호가 성공적으로 변경되었습니다.')
            location.href = `${apiAddress}:3712/login`
        } else {
            const errorMsg = response.data.errorMsg
            alert(`${errorMsg}`)
        }
    },
    find: async (tel, username) => {
        interface IFind {
            email: String
            result: boolean
        }
        const response = await XHR<IFind>(
            'get',
            `${apiAddress}:3712/findall?tel=${tel}&username=${username}`
        )
        console.log(response.data)
        if (response.data.result) alert(`아이디 : ${response.data.email}`)
        else alert('계정을 찾을 수 없습니다. 다시 입력해주세요.')
    },
    login: async (email, password) => {
        interface ILogin {
            token: String
            result: boolean
        }
        const response = await XHR<ILogin>('post', `${apiAddress}:3712/login`, {
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
