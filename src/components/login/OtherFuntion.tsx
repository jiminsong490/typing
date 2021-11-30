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
            <Link href='/loginFuntionPage/findID'>
                <a>
                    <input type='button' value='FIND ID' />
                </a>
            </Link>

            <Link href='/loginFuntionPage/changePW'>
                <a>
                    <input type='button' value='CHANGE PASSWORD' />
                </a>
            </Link>
            <Link href='/loginFuntionPage/deleteID'>
                <a>
                    <input type='button' value='DELETE ID' />
                </a>
            </Link>
        </>
    )
}
export default OtherFuntion
