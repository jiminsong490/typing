import React, { useEffect, useState } from 'react'
import Typing from '../components/Typing/Typing'
import cookies from 'next-cookies'
import ExcuteApi from '../apis/ExcuteApi'
import { updateLanguage } from '../redux/rootReducer'
import { useDispatch, useSelector } from '../redux/hooks'

const typing = (props) => {
    const [idx1, setIdx1] = useState('20')
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(updateLanguage('JAVA'))
    }, [])
    const language = useSelector((store) => store.language)
    const typingText = ExcuteApi.randomText(idx1)
    console.log(language)

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
