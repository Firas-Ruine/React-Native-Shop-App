import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import productsReducer from "./store/reducers/products";
import cartReducer from "./store/reducers/cart";
import { MyDrawer, MyStack } from "./navigation/ShopNavigator";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import orderReducer from './store/reducers/orders'
const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};
const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: orderReducer
});

const store = createStore(rootReducer);

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(error) => console.log(error)}
      />
    );
  }

  return (
    <Provider store={store}>
      <MyDrawer />
    </Provider>
  );
}
