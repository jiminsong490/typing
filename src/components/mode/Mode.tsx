import { useState } from 'react'
import { useDispatch, useSelector } from '../../redux/hooks'
import { updateHardMode } from '../../redux/rootReducer'

const Mode = () => {
    const dispatch = useDispatch()
    const hardmode = useSelector((store) => store.hardMode)
    const [modeBTValue, setmodeBTValue] = useState('하드모드')
    const handleClick = (e) => {
        if (hardmode) {
            dispatch(updateHardMode(false))
            setmodeBTValue('하드모드')
        } else {
            dispatch(updateHardMode(true))
            setmodeBTValue('이지모드')
        }
    }
    return (
        <>
            <input type='button' value={modeBTValue} onClick={handleClick} />
        </>
    )
}
export default Mode
