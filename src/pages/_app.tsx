import axios from 'axios'
import { AppProps } from 'next/app'
import React from 'react'
import { SWRConfig } from 'swr'

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
            <Component {...pageProps} />
        </SWRConfig>
    )
}

export default MyApp
