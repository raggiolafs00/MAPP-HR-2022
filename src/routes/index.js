import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

/*  Import the views here */
import Main from "../views/Main";
import Boards from "../views/Boards";
import Lists from "../views/Lists";
import Tasks from "../views/Tasks";

const routes = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Boards" component={Boards} />
            <Stack.Screen name="Lists" component={Lists} />
            <Stack.Screen name="Tasks" component={Tasks} />
        </Stack.Navigator>     
    </NavigationContainer>               
);
export default routes;