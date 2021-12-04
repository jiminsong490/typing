import { useState } from 'react'

const useCheakWrong = (oneText, text) => {
    const [wrongText, setWrongText] = useState([])
    oneText.filter((asd, idx, oT) => {
        // setWrongText([])
        oT[idx] == text[idx]
            ? setWrongText((wrongText) => [...wrongText, true])
            : setWrongText((wrongText) => [...wrongText, false])
    })
    return wrongText
}
export default useCheakWrong
