import cookies from 'next-cookies'
import { useState } from 'react'
import Login from '../components/login/Login'

const loginPage = (props) => {
    return <>{<Login token={props.token} />}</>
}
loginPage.getInitialProps = async (ctx) => {
    const { token } = cookies(ctx)
    // console.log(token)
    return { token }
}
export default loginPage
