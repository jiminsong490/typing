import { useState } from 'react'
import ExcuteApi from './../../apis/ExcuteApi'
const FileUpload = () => {
    const [file, setFile] = useState(null)
    const handleFileChange = (e) => {
        setFile(e.target.files[0])
        console.log(e.target.files[0])
    }

    const handleClick = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('testfile', file)
        ExcuteApi.insertFile(formData)
        console.log(formData)
    }

    return (
        <>
            <input type='file' accept='' onChange={handleFileChange} />
            <input type='button' value='업로드' onClick={handleClick} />
        </>
    )
}
export default FileUpload
