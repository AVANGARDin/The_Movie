import { createSlice } from '@reduxjs/toolkit';

const myList = createSlice({
  name: "myList",
  initialState: {
    myList: []
  },
  reducers: {
    addVideo(state, action) {
      state.myList.push(action.payload)
     },
    removeVideo(state, action) {
      const index = state.myList.findIndex(item => item.id === +action.payload.id);
      state.myList.splice(index, 1);
     },
     clearAll(state, action) {
      state.myList = action.payload;
     }
  }
});

export const { addVideo, removeVideo, clearAll } = myList.actions;

export default myList.reducer;
