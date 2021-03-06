import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { CarDetails } from "../screens/CarDetails";
import { SchedulingDetails } from "../screens/ShedulingDetails";
import { Scheduling } from "../screens/Scheduling";
import { SchedulingComplete } from "../screens/SchedulingComplete";
import { MyCars } from "../screens/MyCars";
import { Splash } from "../screens/Splash/";

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
       <Screen name="Splash" component={Splash} />
      
      <Screen name="Home" component={Home} />

      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />

      <Screen name="Scheduling" component={Scheduling} />

      <Screen name="SchedulingComplete" component={SchedulingComplete} />

      <Screen name="MyCars" component={MyCars} />
    </Navigator>
  );
}
