import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../utils/user/userSlice";
// ...

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;

//TODO : étudier la doc pour le return type des thunk
/* export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  UnknownAction
>; */
