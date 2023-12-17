import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IuserList } from "./../../../type/type";

const initialState: IuserList = {
  page: 0,
  total_pages: 0,
  userlist: [
    {
      avatar: "",
      email: "",
      first_name: "",
      id: 0,
      last_name: "",
    },
  ],
};

export const handleUserList = createAsyncThunk(
  "userlist/pagination",
  async ({ page, perPage }: { page: number; perPage: number }) => {
    const response = await fetch(
      `https://reqres.in/api/users?page=${page}&per_page=${perPage}`
    );
    const data = await response.json();
    return data;
  }
);

const userListSlice = createSlice({
  name: "userlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(handleUserList.pending, () => {})
      .addCase(handleUserList.fulfilled, (state, data: any) => {
        state.page = data.payload.page;
        state.total_pages = data.payload.total_pages;
        state.userlist = data.payload.data;
      })
      .addCase(handleUserList.rejected, () => {});
  },
});

export const userListReducer = userListSlice.reducer;
