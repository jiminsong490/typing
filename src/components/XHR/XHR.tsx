import axios from 'axios'

const XHR = async (method, url, params = {}, headers = {}) => {
    console.log(method, url, params, headers)
    const result = await axios({
        method: method,
        url: url,
        data: params,
        params: params,
        headers: headers,
    })
    console.log(result)

    return result
}

export default XHR
