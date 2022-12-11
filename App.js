import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homescreen from "./screens/Homescreen";
import MatchScreen from "./screens/matchScreen";
import { useState } from "react";
const Stack = createNativeStackNavigator();

function App({ navigation, route }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Matches" component={Homescreen} />
        <Stack.Screen
          options={({ route }) => ({
            title: route.params.matchName,
            // headerTransparent: true,
            // headerTitleStyle: { color: "black" },
            // headerTintColor: "black",
            // headerStyle: { backgroundColor: "white" },
          })}
          name="Match"
          component={MatchScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
