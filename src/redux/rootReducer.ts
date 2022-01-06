import { combineReducers, createSlice } from '@reduxjs/toolkit'

interface IState {
    language: String
    hardMode: boolean
    accuracy: number
}

const initialState: IState = {
    language: 'JAVA',
    hardMode: false,
    accuracy: 100,
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
    },
})

export const { updateLanguage, updateHardMode } = typingStore.actions

export default typingStore.reducer
