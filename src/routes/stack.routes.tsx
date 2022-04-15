import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


import { Home } from "../screens/Home";
import { CarDetails } from "../screens/CarDetails";
import { SchedulingDetails } from "../screens/ShedulingDetails";
import { Scheduling } from "../screens/Scheduling";
import { SchedulingComplete } from "../screens/SchedulingComplete";

const {Navigator, Screen} = createStackNavigator();

export function StackRoutes(){
    return (
    <Navigator screenOptions={{ headerShown: false }}>
            <Screen 
            name="Home"
            component={Home}
            />

            <Screen 
            name="CarDetails"
            component={CarDetails}
            />
               <Screen 
            name="SchedulingDetails"
            component={SchedulingDetails}
            />
            
               <Screen 
            name="Scheduling"
            component={Scheduling}
            />

               <Screen 
            name="SchedulingComplete"
            component={SchedulingComplete}
            />

    </Navigator>);
 
}