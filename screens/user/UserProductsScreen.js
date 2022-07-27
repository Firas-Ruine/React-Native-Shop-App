import React from "react";
import {
  FlatList,
  Button,
  Platform,
  Alert,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../../components/UI/HeaderButton";
import ProductItem from "../../components/shop/ProductItem";
import Colors from "../../constants/Colors";
import * as productsActions from "../../store/actions/products";

const UserProductsScreen = (props) => {
  const userProducts = useSelector((state) => state.products.userProducts);
  const dispatch = useDispatch();
  const editProductHandler = id => {
    props.navigation.navigate("EditProduct", { productId: id });
  };

  return (
    <FlatList
      data={userProducts}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onSelect={() => {
            
          }}
        >
          <Button
            color={Colors.orange}
            title="Edit"
            onPress={()=>{
              editProductHandler(itemData.item.id)
            }}
          />
          <Button
            color={Colors.orange}
            title="Delete"
            onPress={()=>{
              dispatch(productsActions.deleteProduct(itemData.item.id))
            }}
          />
          </ProductItem>
      )}
    />
  );
};

export default UserProductsScreen;