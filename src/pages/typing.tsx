import React from 'react'
import Typing from '../components/Typing/Typing'
import cookies from 'next-cookies'
import ExcuteApi from '../apis/ExcuteApi'

const typing = (props) => {
    return <Typing token={props.token} />
}
typing.getInitialProps = async (ctx) => {
    const { token } = cookies(ctx)
    // console.log(token)
    return { token }
}
export default typing
