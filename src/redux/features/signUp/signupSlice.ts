import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { IusignupState } from "./../../../type/type";

const initialState: IusignupState = {
  email: "",
  password: "",
  errMsg: "",
  token: "",
};

export const handleSubmit = createAsyncThunk(
  "user/signup",
  async (userInfo: IusignupState) => {
    // Async logic here (e.g., API call)
    const response = await fetch("https://reqres.in/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userInfo.email,
        password: userInfo.password,
      }),
    });

    const data = await response.json();
    return data;
  }
);

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    handleChange: (state, action: PayloadAction<IusignupState>) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.errMsg = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleSubmit.pending, () => {})
      .addCase(handleSubmit.fulfilled, (state, data: any) => {
        if (data.payload.id || data.payload.token) {
          state.email = "";
          state.password = "";
          state.token = data.payload.token;
          localStorage.setItem("authToken", data.payload.token);
        }
        if (data.payload.error) {
          state.errMsg = data.payload.error;
        }
      })
      .addCase(handleSubmit.rejected, () => {});
  },
});

export const { handleChange } = signupSlice.actions;
export const signupReducer = signupSlice.reducer;
