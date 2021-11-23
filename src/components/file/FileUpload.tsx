import { useState } from 'react'
import ExcuteApi from './../../apis/ExcuteApi'
const FileUpload = () => {
    const [file, setFile] = useState(null)
    const handleFileChange = (e) => {
        setFile(e.target.files[0])
    }

    const handleClick = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('testfile', file, 'testfile')
        ExcuteApi.insertFile(formData)

        for (let key of formData.values()) {
            console.log(key)
        }
    }

    return (
        <>
            <input type='file' accept='.txt' onChange={handleFileChange} />
            <input type='button' value='업로드' onClick={handleClick} />
        </>
    )
}
export default FileUpload
