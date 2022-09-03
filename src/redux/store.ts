import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import albumSlice from './slices/albumSlice'
import postSlice from './slices/postSlice'
import userSlice from './slices/userSlice'
// ...
const store = configureStore({
  reducer: {
    users: userSlice,
    posts: postSlice,
    albums: albumSlice,
  },
})


export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>


export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector



export default store