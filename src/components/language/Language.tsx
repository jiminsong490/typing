import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from '../../redux/hooks'
import { updateLanguage } from '../../redux/rootReducer'

const Language = () => {
    const language = useSelector((store) => store.language)
    const [Selected, setSelect] = useState(`${language}`)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        dispatch(updateLanguage(e.target.value))
        setSelect(`${language}`)
    }
    return (
        <>
            <select onChange={handleChange} value={Selected}>
                <option>C</option>
                <option>PYTHON</option>
                <option>JAVA</option>
            </select>
        </>
    )
}
export default Language
