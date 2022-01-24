import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: combineReducers({
    app: () => ({}),
  }),
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
