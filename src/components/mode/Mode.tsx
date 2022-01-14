import { useState } from 'react'
import { useDispatch, useSelector } from '../../redux/hooks'
import { updateHardMode } from '../../redux/rootReducer'
import styled from 'styled-components'

const Asd = styled.div`
    height: 50px;
    input {
        background-color: white;
    }
`

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
            <Asd>
                <input
                    type='button'
                    value={modeBTValue}
                    onClick={handleClick}
                />
            </Asd>
        </>
    )
}
export default Mode
