import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from '../../redux/hooks'
import { updateSubmit } from '../../redux/rootReducer'

const Log = () => {
    const [max, setMax] = useState(Number(0))
    const [log, setLog2] = useState(null)

    const typingLog = useSelector((store) => store.typingLog)
    const submit = useSelector((store) => store.submit)
    const dispatch = useDispatch()
    useEffect(() => {
        showLog()
        findMax()
        dispatch(updateSubmit(false))
    }, [submit])

    const showLog = () => {
        setLog2('이전 속도 : ' + typingLog)
    }
    const findMax = () => {
        max < Number(typingLog) ? setMax(Number(typingLog)) : null
    }
    return (
        <>
            {typingLog === null ? null : <p>{log}</p>}
            {max === Number(0) ? null : <a>최고 속도 : {max}</a>}
        </>
    )
}
export default Log
