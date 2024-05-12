import { UserModel } from '@/app/dashboard/users/model/user';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: UserModel[] = [];

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    addUser( state, action: PayloadAction<UserModel> ) {
        state.push(action.payload);
    }
    
  }
});

export const { addUser } = userSlice.actions

export default userSlice.reducer