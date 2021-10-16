import useSWR from 'swr'
import XHR from '../components/XHR/XHR'

const ExcuteApi = {
    insertText: async (text) => {
        const response = await XHR('post', 'http://127.0.0.1:3712/exText', {
            text: text,
        })
    },
    randomText: (idx, nextIdx) => {
        const { data, isValidating, error } = useSWR(
            `http://127.0.0.1:3712/randomText?text=${idx}&nextText=${nextIdx}`
        )
        const presentText = data?.text
        const nextText = data?.nextText

        return { presentText, nextText }
    },
}
export default ExcuteApi
