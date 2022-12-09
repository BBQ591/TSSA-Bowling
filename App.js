import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homescreen from "./screens/Homescreen";
import MatchScreen from "./screens/matchScreen";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen
          options={{
            // headerTransparent: true,
            headerTitleStyle: { color: "black" },
            headerTintColor: "black",
            headerStyle: { backgroundColor: "white" },
          }}
          name="Match"
          component={MatchScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
