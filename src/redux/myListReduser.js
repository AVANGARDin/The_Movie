import { createSlice } from '@reduxjs/toolkit';

const myList = createSlice({
  name: "my-list",
  initialState: {
    myList: []
  },
  reducers: {
    addVideo(state, action) {
      state.myList.push(action.payload.video)
     },
    removeVideo(state, action) {
      const index = state.myList.findIndex(item => item.id === +action.payload.id);
      state.myList.splice(index, 1);
     },
  }
});

export const { addVideo, removeVideo } = myList.actions;

export default myList.reducer;
