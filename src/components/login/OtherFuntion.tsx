import React from 'react'
import Link from 'next/link'

const OtherFuntion = () => {
    return (
        <>
            <Link href='/loginFuntionPage/signUp'>
                <a>
                    <input type='button' value='SIGN UP' />
                </a>
            </Link>
            <input type='button' value='FIND ID' />
            <input type='button' value='CHANGE PASSWORD' />
            <input type='button' value='DELETE ID' />
        </>
    )
}
export default OtherFuntion
