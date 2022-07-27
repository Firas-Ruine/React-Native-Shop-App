import React from "react";
import Colors from "../../constants/Colors";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import Card from "../UI/Card";
const ProductItem = (props) => {
    let TouchableComponent = TouchableOpacity;
    if(Platform.OS==='android' && Platform.Version>=21)
    {
        TouchableComponent=TouchableNativeFeedback;
    }
  return (
  
      <Card style={styles.product}>
        <View style={styles.touchable}>
        <TouchableComponent onPress={props.onSelect} useForeground>
            <View>
        <Image style={styles.image} source={{ uri: props.image }} />
        <View style={styles.text}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.price}>${props.price.toFixed(2)}</Text>
        </View>
        <View style={styles.actions}>
          {props.children}
        </View>
        </View>
        </TouchableComponent>
        </View>
      </Card>
   
  );
};
const styles = StyleSheet.create({
  product: {
    shadowColor: Colors.orange,
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    margin: 20,
  },
  text: {
    alignItems: "center",
    height: "15%",
  },
  touchable:
  {
     borderRadius:10,
     overflow:'hidden'
  },
  image: {
    width: "100%",
    height: "60%",
    overflow: "hidden",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 18,
    marginVertical: 5,
    fontFamily:'open-sans-bold'
  },
  price: {
    fontSize: 14,
    color: "#888",
    fontFamily:'open-sans',
    marginVertical: 5,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "25%",
    paddingHorizontal: 20,
  },
});
export default ProductItem;
