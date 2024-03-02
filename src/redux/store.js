import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
// import { tasksReducer } from "./tasks/slice";
import { contactsReducer } from "./contacts/contactSlice";
import { filtersReducer } from "./contacts/filterSlice";
import { authReducer } from "./auth/slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "contacts"], // List of reducers to persist
};

const generateDefaultContacts = () => {
  const defaultContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  // Збереження початкових контактів у локальному сховищі
  storage.setItem("root", JSON.stringify(defaultContacts));

  return defaultContacts;
};

// Persisting token field from auth slice to localstorage
// const authPersistConfig = {
//   key: "auth",
//   storage,
//   whitelist: ["token"],
// };

// const contactPersistConfig = {
//   key: "contacts",
//   storage,
//   whitelist: ["value"],
// };

// export const contactsReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );

const rootReduser = combineReducers({
  auth: authReducer,
  contacts: contactsReducer,
  filters: filtersReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReduser);
generateDefaultContacts();

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
