import React, { useState } from 'react'
import Typing from '../components/Typing/Typing'
import cookies from 'next-cookies'
import ExcuteApi from '../apis/ExcuteApi'

const typing = (props) => {
    const [idx1, setIdx1] = useState('20')
    const typingText = ExcuteApi.randomText(idx1)
    return (
        <>
            {typingText && typingText != undefined && (
                <Typing token={props.token} pText={typingText} />
            )}
        </>
    )
}
typing.getInitialProps = async (ctx) => {
    const { token } = cookies(ctx)
    // console.log(token)
    return { token }
}
export default typing
