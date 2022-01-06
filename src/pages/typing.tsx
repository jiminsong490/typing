import React, { useEffect, useRef, useState } from 'react'
import Typing from '../components/Typing/Typing'
import cookies from 'next-cookies'
import ExcuteApi from '../apis/ExcuteApi'
import { updateLanguage } from '../redux/rootReducer'
import { useDispatch, useSelector } from '../redux/hooks'

const typing = (props) => {
    const language = useSelector((store) => store.language)
    const typingText = ExcuteApi.randomText(language)
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
