import { applyMiddleware, combineReducers, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";

import AsyncStorage from "@react-native-async-storage/async-storage";
import TodoReducer from "./reducers/todo.reducer";
import UserReducer from "./reducers/user.reducer";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const RootReducer = combineReducers({
  TodoReducer,
  UserReducer,
});

const persistedReducer = persistReducer(persistConfig, RootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
