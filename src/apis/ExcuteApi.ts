import useSWR from 'swr'
import XHR from '../components/XHR/XHR'

const ExcuteApi = {
    insertText: async (text) => {
        const response = await XHR(
            'post',
            'http://218.50.146.151:3712/exText',
            {
                text: text,
            }
        )
    },
    randomText: (idx) => {
        const { data, isValidating, error } = useSWR(
            `http://218.50.146.151:3712/randomText?text=${idx}`
        )
        const text = data?.text
        return text
    },
}
export default ExcuteApi
