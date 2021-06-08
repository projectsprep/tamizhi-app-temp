import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import routes from "./routes";
import HomeScreen from "./../screens/HomeScreen";
import SubCategoryScreen from "./../screens/SubCategoryScreen";
import CategoryScreen from "./../screens/CategoryScreen";
import ProductsSearchScreen from "./../screens/ProductsSearchScreen";
import ProductDetailsScreen from "./../screens/ProductDetailsScreen";
import ProductsListScreen from "./../screens/ProductsListScreen";

const Stack = createStackNavigator();

const HomeNavigator = (props) => (
  <Stack.Navigator screenOptions={{ headerShown: true }}>
    <Stack.Screen name={routes.HOME_PAGE} component={HomeScreen} options={{headerShown: false}} />
    <Stack.Screen name={routes.SUB_CATEGORIES}
    component={SubCategoryScreen}
    options={{title: "Subcategories", 
      headerTintColor: "#333", 
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: "#F5F5F8",
        elevation: 0
      },
      headerTitleStyle: {
        fontSize: 22
      }
    }} 
    />
    <Stack.Screen 
    name={routes.CATEGORIES} 
    component={CategoryScreen}
    options={{title: "Categories", 
      headerTintColor: "#333", 
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: "#F5F5F8",
        elevation: 0
      },
      headerTitleStyle: {
        fontSize: 22
      }
    }}
     />
    <Stack.Screen name={routes.HOME_PRODUCTS}
    component={ProductsListScreen}
    options={{title: "Products", 
      headerTintColor: "#333", 
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: "#F5F5F8",
        elevation: 0
      },
      headerTitleStyle: {
        fontSize: 22
      }
    }}
    />
    <Stack.Screen 
    name={routes.SEARCH} 
    component={ProductsSearchScreen} 
    options={{title: "Search Products", 
      headerTintColor: "#333", 
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: "#F5F5F8",
        elevation: 0
      },
      headerTitleStyle: {
        fontSize: 22
      }
    }}
    />
    <Stack.Screen
      name={routes.PRODUCT_DETAILS}
      component={ProductDetailsScreen}
      options={{title: "Product Details", 
        headerTintColor: "#333", 
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#F5F5F8",
          elevation: 0
        },
        headerTitleStyle: {
          fontSize: 22
        }
      }}
    />
  </Stack.Navigator>
);

export default HomeNavigator;

// Tamil
