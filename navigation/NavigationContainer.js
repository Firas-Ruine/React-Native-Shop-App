import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import MyDrawer from "./ShopNavigator";

const NavigationContainer = ({navigation}) => {
  const navRef = useRef();
  const isAuth = useSelector(state => !!state.auth.token);
  useEffect(() => {
    if (!isAuth) {
      navRef.current.dispatch(
        navigation.navigate({ routeName: "Login" })
      );
    }
  }, [isAuth]);
  return <MyDrawer ref={navRef} />;
};

export default NavigationContainer;