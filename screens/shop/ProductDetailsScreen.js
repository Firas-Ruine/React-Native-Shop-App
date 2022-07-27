import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StyleSheet,
} from "react-native";
import * as CartActions from '../../store/actions/cart'
import Colors from "../../constants/Colors";
import { useSelector,useDispatch } from "react-redux";
const ProductDetailsScreen = ({ props, route, navigation }) => {
  const { productId } = route.params;
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId)
  );
  const dispatch = useDispatch()
  return (
    <View>
      <ScrollView>
        <Image style={styles.image} source={{uri: selectedProduct.imageUrl}} />
        <View style={styles.actions}>
        <Button color={Colors.orange} title="Add to Cart" onPress={() => {
            dispatch(CartActions.addToCart(selectedProduct))
        }}/>
        </View>
        <Text style={styles.price} >${selectedProduct.price.toFixed(2)}</Text>
        <Text style={styles.desc} >{selectedProduct.description}</Text>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
    image:
    {
        height:300,
        margin:10,
        borderRadius:15
    },
    price:
    {
        fontSize:24,
        color:'#888',
        fontFamily:'open-sans-bold',
        textAlign:'center',
        marginVertical:20
    },
    desc:
    {
        fontSize:14,
        textAlign:'center',
        marginHorizontal:20,
        fontFamily:'open-sans'
    },
    actions:
    {
        marginVertical:10,
        alignItems:'center'
    }
});
export default ProductDetailsScreen;
