import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

/*  Import the views here */
import Main from "../views/Main";
import Boards from "../views/Boards";

const routes = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Boards" component={Boards} />
        </Stack.Navigator>     
    </NavigationContainer>               
);
export default routes;