import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from '../../redux/hooks'
import { updateLanguage } from '../../redux/rootReducer'

const Language = () => {
    const language = useSelector((store) => store.language)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        e.preventDefault()
        dispatch(updateLanguage(e.target.value))
    }
    return (
        <>
            <select onChange={handleChange} value={language}>
                <option>C</option>
                <option>PYTHON</option>
                <option>JAVA</option>
            </select>
        </>
    )
}
export default Language
