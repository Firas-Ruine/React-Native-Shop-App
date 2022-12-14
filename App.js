import { combineReducers, createStore , applyMiddleware} from "redux";
import { Provider } from "react-redux";
import { useState } from "react";
import ReduxThunk from 'redux-thunk';
import { StyleSheet, View } from "react-native";
import productsReducer from "./store/reducers/products";
import cartReducer from "./store/reducers/cart";
import { MyDrawer, MyStack, ProductsNavigators } from "./navigation/ShopNavigator";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import orderReducer from "./store/reducers/orders";
import authReducer from './store/reducers/auth'
import { NavigationContainer } from "@react-navigation/native";
const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};
const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: orderReducer,
  auth:authReducer
});

const store = createStore(rootReducer,applyMiddleware(ReduxThunk));

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
      <NavigationContainer>
       <MyDrawer />
      </NavigationContainer>
    </Provider>
  );
}
