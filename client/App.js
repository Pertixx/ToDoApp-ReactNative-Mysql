import { StyleSheet, View } from "react-native";
import { persistor, store } from "./store";

import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import Navigator from "./navigation";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { getTodosById } from "./store/actions/todo.action";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodosById(1)); //using id 1 just to try and get the todos
  }, []);

  return (
    <View style={styles.container}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BottomSheetModalProvider>
            <Navigator />
          </BottomSheetModalProvider>
        </PersistGate>
      </Provider>
    </View>
  );
};

export default AppWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
