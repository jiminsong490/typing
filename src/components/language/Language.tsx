import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from '../../redux/hooks'
import { updateLanguage } from '../../redux/rootReducer'

const Language = (props) => {
    const language = useSelector((store) => store.language)
    const [Selected, setSelect] = useState(props.language)
    const dispatch = useDispatch()
    // useEffect(() => {
    //     setSelect(language)
    // }, [language])
    const handleChange = (e) => {
        dispatch(updateLanguage(e.target.value))
        setSelect(props.language)
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
