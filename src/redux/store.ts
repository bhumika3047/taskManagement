import { createStore, Store, AnyAction } from "redux";
import { TaskState, TaskActions } from "./types";
import taskReducer from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // default is localStorage

// Persist config for redux-persist
const persistConfig = {
  key: "root",
  storage,
};

// Apply redux-persist to the taskReducer
const persistedReducer = persistReducer(persistConfig, taskReducer);

// Define the Redux store with proper types, using AnyAction to handle actions
const store: Store<TaskState, AnyAction> = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
