import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { CurriedGetDefaultMiddleware } from "@reduxjs/toolkit/src/getDefaultMiddleware";
import rootReducer from "./rootReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["task", "settings"],
};

const reducer = persistReducer(persistConfig, rootReducer);

const devTools = process.env.NODE_ENV !== "production";

const middleware = (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
  getDefaultMiddleware({
    thunk: false,
    immutableCheck: true,
    serializableCheck: false,
  });

export const store = configureStore({ reducer, middleware, devTools });

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
