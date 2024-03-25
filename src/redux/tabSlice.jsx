import { createSlice, nanoid } from '@reduxjs/toolkit'

const TabSlice = createSlice({
    name: 'tabmenu',
    initialState:
    {
        title: [],
        component: {},
    },
    reducers: {
        AddTab: (state, action) => {
            const isExistingName = state.title.some(tab => tab.name === action.payload);

            // If action.payload doesn't exist in state.title, add it
            if (!isExistingName) {
                state.title.push(action.payload);
                state.component = action.payload;
            }
        },
        RemoveTab: (state, action) => {
            console.log(action.payload)
            const removedIndex = action.payload
            state.title = state.title.filter(((item, index) => index !== removedIndex))
            console.log(state.title)
            if (removedIndex !== 0) { state.component = state.title[removedIndex].name; console.log('com', state.component) }



        }
    }
})
export const { AddTab, RemoveTab } = TabSlice.actions
export default TabSlice