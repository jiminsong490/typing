import { combineReducers, createSlice } from '@reduxjs/toolkit'

interface IState {
    language: string
    hardMode: boolean
    accuracy: number
    typingLog: string
    submit: boolean
}

const initialState: IState = {
    language: 'C',
    hardMode: false,
    accuracy: 100,
    typingLog: null,
    submit: false,
}

export const typingStore = createSlice({
    name: 'typingStore',
    initialState: initialState,
    reducers: {
        updateLanguage: (state, { payload }) => {
            state.language = payload
        },
        updateHardMode: (state, { payload }) => {
            state.hardMode = payload
        },
        updateTypingLog: (state, { payload }) => {
            state.typingLog = payload
        },
        updateSubmit: (state, { payload }) => {
            state.submit = payload
        },
    },
})

export const { updateLanguage, updateHardMode, updateSubmit, updateTypingLog } =
    typingStore.actions

export default typingStore.reducer
