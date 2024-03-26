import { createSlice, nanoid } from '@reduxjs/toolkit'

const TabSlice = createSlice({
    name: 'tabmenu',
    initialState:
    {
        title: [],
        component: {},
    },
    reducers: {
        // AddTab: (state, action) => {
        //     const isExistingName = state.title.some((title) => title.name === action.payload);

        //     if (!isExistingName) {
        //         state.title = [...state.title, { name: action.payload.name, id: action.payload.id }];
        //     } else {
        //         console.log("Name already exists:", action.payload);
        //     }
        // },
        AddTab: (state, action) => {
            const existingIndex = state.title.findIndex(title => title.name === action.payload.name);

            //findIndex ley index vetayena vaney -1 dinxa
            if (existingIndex === -1) {
                state.title = [...state.title, { name: action.payload.name, id: action.payload.id }];
            }
        },
        RemoveTab: (state, action) => {
            const removedIndex = action.payload;
            console.log(removedIndex);


            if (state.title.length > 1) {
                let newActiveTab;
                if (removedIndex === 0) {
                    //first tab removed hunda
                    newActiveTab = removedIndex + 1;

                    state.component = state.title[newActiveTab].name;

                    console.log(state.component);
                } else {
                    //bichaa ko tab removed hunda
                    newActiveTab = removedIndex > 0 ? removedIndex - 1 : 0;
                    //last tab removed hunda
                    if (removedIndex === state.title.length - 1) {
                        console.log('asdsa')
                        newActiveTab = removedIndex - 1;
                    }
                    // console.log(removedIndex)

                    // console.log(newActiveTab)
                    state.component = state.title[newActiveTab].name;
                }
            } else {
                state.component = ''; // euta matra tab baki huda


            }
            // Remove the tab from the tabs array
            state.title.splice(removedIndex, 1);
        }
    }
})
export const { AddTab, RemoveTab } = TabSlice.actions
export default TabSlice