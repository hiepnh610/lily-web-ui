import { combineReducers } from '@reduxjs/toolkit';

import slices from './slices';

const rootReducer = combineReducers({
  auth: slices.authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
