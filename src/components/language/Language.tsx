import { useEffect, useState } from 'react'
import { useDispatch } from '../../redux/hooks'
import { updateLanguage } from '../../redux/rootReducer'

const Language = () => {
    const [language, setLanguage] = useState('C')
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(updateLanguage(language))
    }, [language])

    const handleChange = (e) => {
        setLanguage(e.target.value)
    }
    return (
        <>
            <select onChange={handleChange}>
                <option>C</option>
                <option>PYTHON</option>
                <option>JAVA</option>
            </select>
        </>
    )
}
export default Language
