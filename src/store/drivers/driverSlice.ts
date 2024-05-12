import { UserModel } from '@/app/dashboard/users/model/user';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: UserModel[] = [];

const driverSlice = createSlice({
  name: 'driver',
  initialState,
  reducers: {

    addDrivers( state, action: PayloadAction<UserModel[]> ) {
        const existingIds = new Set(state.map(user => user.id));
        const newDrivers = action.payload.filter(user => !existingIds.has(user.id));
        state.push(...newDrivers);
    }
  }
});

export const { addDrivers } = driverSlice.actions
export default driverSlice.reducer