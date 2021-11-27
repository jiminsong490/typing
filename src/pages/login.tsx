import cookies from 'next-cookies'
import { useState } from 'react'
import Login from '../components/login/Login'

const login = (props) => {
    return <Login token={props.token} />
}
login.getInitialProps = async (ctx) => {
    const { token } = cookies(ctx)
    // console.log(token)
    return { token }
}
export default login
