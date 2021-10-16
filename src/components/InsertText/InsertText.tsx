import React from 'react'
import ExcuteApi from '../../apis/ExcuteApi'
import Inputtool from '../input/Inputtool'

const InsertText = (props) => {
    const handleSubmit = (e) => {
        // e.preventDefault()
        const text = e.target.insertText.value
        console.log(text)
        ExcuteApi.insertText(text)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <Inputtool
                        name='insertText'
                        type='text'
                        placeholder='추가할 텍스트를 입력하세요.'
                        size='50'
                        autocomplete='off'
                    />
                    <input type='submit' value='추가' />
                </div>
            </form>
        </>
    )
}
export default InsertText
