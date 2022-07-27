import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "../constants/Colors";
import { DrawerActions } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CartScreen, {
  screenOptions as cartScreenOptions,
} from "../screens/shop/CartScreen";
import ProductDetailsScreen from "../screens/shop/ProductDetailsScreen";
import ProductsOverviewScreen, {
  screenOptions,
} from "../screens/shop/ProductsOverviewScreen";
import { Button, Platform } from "react-native";
import HeaderButton from "../components/UI/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import OrdersScreen, {
  screenOptions as ordersScreenOptions,
} from "../screens/shop/OrdersScreen";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import UserProductsScreen, {screenOptions as
  userScreenOptions,
} from "../screens/user/UserProductsScreen";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import EditProductsScreen, { screenOptions as
  editScreenOptions,
} from "../screens/user/EditProductsScreen";



const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown:false}} >
      <Drawer.Screen
        name="Products"
        component={ProductsNavigators}
        options={{
          drawerIcon: drawerConfig =>
          (
            <Ionicons name={Platform.OS ==='android' ?'md-cart' : 'ios-cart'}
            size={23}
            color={Colors.orange}
            />
          )
        }}/>
        
      <Drawer.Screen
        name="Orders"
        component={OrderNavigator}
        options={{
          drawerIcon: drawerConfig =>
          (
            <Ionicons name={Platform.OS ==='android' ?'md-list' : 'ios-list'}
            size={23}
            color={Colors.orange}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Admin"
        component={AdminNavigators}
        options={{
          drawerIcon: drawerConfig =>
          (
            <Ionicons name={Platform.OS ==='android' ?'md-create' : 'ios-create'}
            size={23}
            color={Colors.orange}
            />
          )
        }}
      />
    </Drawer.Navigator>
  );
};

const ProductsNavigator = createNativeStackNavigator();
export const ProductsNavigators = () => {
  return (
    <ProductsNavigator.Navigator
      screenOptions={({ navigation, route }) => ({
        headerStyle: { backgroundColor: "white" },
        headerTintColor: Colors.orange,
        headerTitleStyle: { fontFamily: "open-sans-bold" },
        headerBackTitleStyle: { fontFamily: "open-sans" },
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            
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
        name="Product Overview"
        component={ProductsOverviewScreen}
        options={screenOptions}
      />
      <ProductsNavigator.Screen
        name="Product Details"
        component={ProductDetailsScreen}
        options={({ route }) => ({ title: route.params.productTitle })}
      />
      <ProductsNavigator.Screen
        name="Cart"
        component={CartScreen}
        options={cartScreenOptions}
      />
    </ProductsNavigator.Navigator>
  );
};

const OrdersNavigator = createNativeStackNavigator();
export const OrderNavigator = () => {
  return (
    <OrdersNavigator.Navigator  screenOptions={({ navigation, route }) => ({
      headerStyle: { backgroundColor: "white" },
      headerTintColor: Colors.orange,
      headerTitleStyle: { fontFamily: "open-sans-bold" },
      headerBackTitleStyle: { fontFamily: "open-sans" },
    })}
      >
      <OrdersNavigator.Screen
        name="Orders"
        component={OrdersScreen}
        options={ordersScreenOptions}
      />
    </OrdersNavigator.Navigator>
  );
};

const AdminNavigator = createNativeStackNavigator();
export const AdminNavigators = () => {
  return (
    <AdminNavigator.Navigator screenOptions={({ navigation, route }) => ({
      headerStyle: { backgroundColor: "white" },
      headerTintColor: Colors.orange,
      headerTitleStyle: { fontFamily: "open-sans-bold" },
      headerBackTitleStyle: { fontFamily: "open-sans" },
    })}>
      <AdminNavigator.Screen
        name="User Products"
        component={UserProductsScreen}
        options={userScreenOptions}
      />
      <AdminNavigator.Screen
        name="EditProduct"
        component={EditProductsScreen}
        options={editScreenOptions}
      />
    </AdminNavigator.Navigator>
  );
};
