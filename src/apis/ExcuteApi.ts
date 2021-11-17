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
        const response = await XHR('post', 'http://127.0.0.1:3712/fileUpload', {
            file: file,
        })
    },
}
export default ExcuteApi
