import React from "react";
import { SafeAreaView, View,Button } from "react-native";
import { useDispatch } from "react-redux";
import Colors from "../../constants/Colors";
import * as authActions from '../../store/actions/auth'
const LogoutButton = ({props,navigation}) => {
    const dispatch = useDispatch();

  return (
    <View style={{flex:1, padding:20}}>
      <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
        <Button title="LogOut" color={Colors.orange} onPress={() => {
            dispatch(authActions.logout());
            //navigation.navigate('Login')
        }} />
      </SafeAreaView>
    </View>
  );
};

export default LogoutButton;
