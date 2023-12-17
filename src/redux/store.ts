import { configureStore } from "@reduxjs/toolkit";
import { signupReducer } from "./features/signUp/signupSlice";
import { signinReducer } from "./features/signIn/signinSlice";
import { userListReducer } from "./features/userList/userListSlice";

type RootState = {
  signup: ReturnType<typeof signupReducer>;
  signin: ReturnType<typeof signinReducer>;
  userlist: ReturnType<typeof userListReducer>;
};

const store = configureStore({
  reducer: {
    signup: signupReducer,
    signin: signinReducer,
    userlist: userListReducer,
  },
});

export { store };

export type { RootState };
export type AppDispatch = typeof store.dispatch;
