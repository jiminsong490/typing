import axios from 'axios'
import { AppProps } from 'next/app'
import React from 'react'
import { SWRConfig } from 'swr'
import { wrapper } from '../redux/store'
// import GlobalStyle from '../styles/GlobalStyle'
declare global {
    interface Window {
        Kakao: any
    }
}

export const fetcher = (url, headers) =>
    axios.get(url, { headers }).then((res) => res.data)
const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <SWRConfig
            value={{
                fetcher: async (resource, headers) =>
                    await fetcher(resource, headers),
            }}
        >
            {/* <GlobalStyle /> */}
            <Component {...pageProps} />
        </SWRConfig>
    )
}

export default wrapper.withRedux(MyApp)
