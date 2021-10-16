import axios from 'axios'

const XHR = async (method, url, params = {}, headers = {}) => {
    // ----------------- ENTER YOUR CODE HERE -----------------
    // API를 호출하는 General 코드를 작성하라
    // --------------------------------------------------------
    const result = await axios({
        method: method,
        url: url,
        data: params,
        params: params,
        headers: headers,
    })
    return result
}

export default XHR
