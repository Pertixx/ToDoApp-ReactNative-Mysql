import { StyleSheet, View } from "react-native";
import { persistor, store } from "./store";

import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import Navigator from "./navigation";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const App = () => {
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
