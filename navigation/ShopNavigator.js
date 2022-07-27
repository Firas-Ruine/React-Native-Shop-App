import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "../constants/Colors";
import { DrawerActions } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CartScreen from "../screens/shop/CartScreen";
import ProductDetailsScreen from "../screens/shop/ProductDetailsScreen";
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import { Button, Platform } from "react-native";
import HeaderButton from "../components/UI/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import OrdersScreen from "../screens/shop/OrdersScreen";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import UserProductsScreen from "../screens/user/UserProductsScreen";
import EditProductsScreen from "../screens/user/EditProductsScreen";

const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Product Overview"
        screenOptions={({ navigation, route }) => ({
          headerStyle: { backgroundColor: "white" },
          headerTintColor: Colors.orange,
          headerTitleStyle: { fontFamily: "open-sans-bold" },
          headerBackTitleStyle: { fontFamily: "open-sans" },
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Add"
                iconName={
                  Platform.OS === "android" ? "md-create" : "ios-create"
                }
                onPress={() => {
                  navigation.navigate("EditProduct");
                }}
              />

              <Item
                title="Cart"
                iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
                onPress={() => {
                  navigation.navigate("Cart");
                }}
              />
            </HeaderButtons>
          ),
        })}
      >
        <ProductsNavigator.Screen
          name="Shop App"
          component={MyStack}
          options={{
            title: "Products",
            drawerIcon: (drawerConfig) => <Ionicons name="md-cart" size={23} />,
          }}
        />
        <Drawer.Screen
          name="Orders"
          component={OrdersScreen}
          options={{
            title: "Orders",
            drawerIcon: (drawerConfig) => <Ionicons name="md-list" size={23} />,
          }}
        />
        <Drawer.Screen
          name="Add Product"
          component={UserProductsScreen}
          options={{
            title: "Your Products",
            drawerIcon: (drawerConfig) => (
              <Ionicons name="md-create" size={23} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const ProductsNavigator = createNativeStackNavigator();
export const MyStack = () => {
  return (
    <ProductsNavigator.Navigator screenOptions={{ headerShown: false }}>
      <ProductsNavigator.Screen
        name="Product Overview"
        component={ProductsOverviewScreen}
        options={{
          title: "Products",
        }}
      />
      <ProductsNavigator.Screen
        name="Product Details"
        component={ProductDetailsScreen}
        options={({ route }) => ({ title: route.params.productTitle })}
      />
      <ProductsNavigator.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: "Cart",
        }}
      />
      <ProductsNavigator.Screen
        name="EditProduct"
        component={EditProductsScreen}
        options={({ route }) => ({ title: route.params.id })}
      />
    </ProductsNavigator.Navigator>
  );
};
