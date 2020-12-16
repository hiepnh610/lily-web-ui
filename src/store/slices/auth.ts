import { createSlice, AnyAction } from '@reduxjs/toolkit';

interface StateType {
  token: string;
  isSignedIn: Boolean;
};

const initialState: StateType = {
  token: '',
  isSignedIn: false,
};

const reducers = {
  setToken(state: StateType, action: AnyAction) {
    return {
      ...state,
      token: action.payload,
    };
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers,
});

export const { setToken } = authSlice.actions;

export default authSlice.reducer;
