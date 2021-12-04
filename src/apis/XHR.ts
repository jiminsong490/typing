import axios from 'axios'
interface IResponse<IData> {
    data: IData
}

const XHR = async <IData>(
    method,
    url,
    params = {},
    headers = {}
): Promise<IResponse<IData>> => {
    const result = (await axios({
        method: method,
        url: url,
        data: params,
        params: params,
        headers: headers,
    })) as IResponse<IData>
    console.log(result)

    return result
}

export default XHR
