import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const CustomHeaderButtons = props =>
{
    return <HeaderButton {...props} IconComponent={Ionicons} iconSize={30} color={Colors.orange}/>
}

export default CustomHeaderButtons;