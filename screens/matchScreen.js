import American10 from "./American10";
import React, { useEffect } from "react";
import { View, Image, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Bakers from "./bakers";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import calculateFinalScore from "./calculateFinalScore";
const Tab = createBottomTabNavigator();
const Tabs = ({ navigation, route }) => {
  const {
    match,
    allBowlers,
    index,
    allMatches,
    homeScore1,
    homeScore2,
    homeScore3,
    homeScore4,
    homeScore5,
    homeScore6,
    awayScore1,
    awayScore2,
    awayScore3,
    awayScore4,
    awayScore5,
    awayScore6,
    BakerhomeScore1,
    BakerhomeScore2,
    BakerhomeScore3,
    BakerhomeScore4,
    BakerhomeScore5,
    BakerawayScore1,
    BakerawayScore2,
    BakerawayScore3,
    BakerawayScore4,
    BakerawayScore5,
  } = route.params;
  console.log(match);
  React.useEffect(() => {
    if (route.params?.homeScore1) {
      match.homeScoresAmerican[0] = homeScore1;
      allMatches[index] = match;
      const _storeData2 = async () => {
        try {
          await AsyncStorage.setItem("games", JSON.stringify(allMatches));
        } catch (error) {
          // Error saving data
          console.log("error saving data");
        }
      };
      _storeData2();
      console.log(match, "dasfkfdaks;hahahahaha");
    }
  }, [route.params?.homeScore1]);
  React.useEffect(() => {
    if (route.params?.homeScore2) {
      match.homeScoresAmerican[1] = homeScore2;
      allMatches[index] = match;
      const _storeData2 = async () => {
        try {
          await AsyncStorage.setItem("games", JSON.stringify(allMatches));
        } catch (error) {
          // Error saving data
          console.log("error saving data");
        }
      };
      _storeData2();
      console.log(match, "dasfkfdaks;hahahahaha");
    }
  }, [route.params?.homeScore2]);
  React.useEffect(() => {
    if (route.params?.homeScore3) {
      match.homeScoresAmerican[2] = homeScore3;
      allMatches[index] = match;
      const _storeData2 = async () => {
        try {
          await AsyncStorage.setItem("games", JSON.stringify(allMatches));
        } catch (error) {
          // Error saving data
          console.log("error saving data");
        }
      };
      _storeData2();
      console.log(match, "dasfkfdaks;hahahahaha");
    }
  }, [route.params?.homeScore3]);
  React.useEffect(() => {
    if (route.params?.homeScore4) {
      match.homeScoresAmerican[3] = homeScore4;
      allMatches[index] = match;
      const _storeData2 = async () => {
        try {
          await AsyncStorage.setItem("games", JSON.stringify(allMatches));
        } catch (error) {
          // Error saving data
          console.log("error saving data");
        }
      };
      _storeData2();
      console.log(match, "dasfkfdaks;hahahahaha");
    }
  }, [route.params?.homeScore4]);
  React.useEffect(() => {
    if (route.params?.homeScore5) {
      match.homeScoresAmerican[4] = homeScore5;
      allMatches[index] = match;
      const _storeData2 = async () => {
        try {
          await AsyncStorage.setItem("games", JSON.stringify(allMatches));
        } catch (error) {
          // Error saving data
          console.log("error saving data");
        }
      };
      _storeData2();
      console.log(match, "dasfkfdaks;hahahahaha");
    }
  }, [route.params?.homeScore5]);
  React.useEffect(() => {
    if (route.params?.homeScore6) {
      match.homeScoresAmerican[5] = homeScore6;
      allMatches[index] = match;
      const _storeData2 = async () => {
        try {
          await AsyncStorage.setItem("games", JSON.stringify(allMatches));
        } catch (error) {
          // Error saving data
          console.log("error saving data");
        }
      };
      _storeData2();
      console.log(match, "dasfkfdaks;hahahahaha");
    }
  }, [route.params?.homeScore6]);
  React.useEffect(() => {
    if (route.params?.awayScore1) {
      match.awayScoresAmerican[0] = awayScore1;
      allMatches[index] = match;
      const _storeData2 = async () => {
        try {
          await AsyncStorage.setItem("games", JSON.stringify(allMatches));
        } catch (error) {
          // Error saving data
          console.log("error saving data");
        }
      };
      _storeData2();
      console.log(match, "dasfkfdaks;hahahahaha");
    }
  }, [route.params?.awayScore1]);
  React.useEffect(() => {
    if (route.params?.awayScore2) {
      match.awayScoresAmerican[1] = awayScore2;
      allMatches[index] = match;
      const _storeData2 = async () => {
        try {
          await AsyncStorage.setItem("games", JSON.stringify(allMatches));
        } catch (error) {
          // Error saving data
          console.log("error saving data");
        }
      };
      _storeData2();
      console.log(match, "dasfkfdaks;hahahahaha");
    }
  }, [route.params?.awayScore2]);
  React.useEffect(() => {
    if (route.params?.awayScore3) {
      match.awayScoresAmerican[2] = awayScore3;
      allMatches[index] = match;
      const _storeData2 = async () => {
        try {
          await AsyncStorage.setItem("games", JSON.stringify(allMatches));
        } catch (error) {
          // Error saving data
          console.log("error saving data");
        }
      };
      _storeData2();
      console.log(match, "dasfkfdaks;hahahahaha");
    }
  }, [route.params?.awayScore3]);
  React.useEffect(() => {
    if (route.params?.awayScore4) {
      match.awayScoresAmerican[3] = awayScore4;
      allMatches[index] = match;
      const _storeData2 = async () => {
        try {
          await AsyncStorage.setItem("games", JSON.stringify(allMatches));
        } catch (error) {
          // Error saving data
          console.log("error saving data");
        }
      };
      _storeData2();
      console.log(match, "dasfkfdaks;hahahahaha");
    }
  }, [route.params?.awayScore4]);
  React.useEffect(() => {
    if (route.params?.awayScore5) {
      match.awayScoresAmerican[4] = awayScore5;
      allMatches[index] = match;
      const _storeData2 = async () => {
        try {
          await AsyncStorage.setItem("games", JSON.stringify(allMatches));
        } catch (error) {
          // Error saving data
          console.log("error saving data");
        }
      };
      _storeData2();
      console.log(match, "dasfkfdaks;hahahahaha");
    }
  }, [route.params?.awayScore5]);
  React.useEffect(() => {
    if (route.params?.awayScore6) {
      match.awayScoresAmerican[5] = awayScore6;
      allMatches[index] = match;
      const _storeData2 = async () => {
        try {
          await AsyncStorage.setItem("games", JSON.stringify(allMatches));
        } catch (error) {
          // Error saving data
          console.log("error saving data");
        }
      };
      _storeData2();
      console.log(match, "dasfkfdaks;hahahahaha");
    }
  }, [route.params?.awayScore6]);
  React.useEffect(() => {
    if (route.params?.BakerhomeScore1) {
      match.homeScoresBaker[0] = BakerhomeScore1;
      allMatches[index] = match;
      const _storeData2 = async () => {
        try {
          await AsyncStorage.setItem("games", JSON.stringify(allMatches));
        } catch (error) {
          // Error saving data
          console.log("error saving data");
        }
      };
      _storeData2();
      console.log(match, "dasfkfdaks;hahahahaha");
    }
  }, [route.params?.BakerhomeScore1]);
  React.useEffect(() => {
    if (route.params?.BakerhomeScore2) {
      match.homeScoresBaker[1] = BakerhomeScore2;
      allMatches[index] = match;
      const _storeData2 = async () => {
        try {
          await AsyncStorage.setItem("games", JSON.stringify(allMatches));
        } catch (error) {
          // Error saving data
          console.log("error saving data");
        }
      };
      _storeData2();
      console.log(match, "dasfkfdaks;hahahahaha");
    }
  }, [route.params?.BakerhomeScore2]);
  React.useEffect(() => {
    if (route.params?.BakerhomeScore3) {
      match.homeScoresBaker[2] = BakerhomeScore3;
      allMatches[index] = match;
      const _storeData2 = async () => {
        try {
          await AsyncStorage.setItem("games", JSON.stringify(allMatches));
        } catch (error) {
          // Error saving data
          console.log("error saving data");
        }
      };
      _storeData2();
      console.log(match, "dasfkfdaks;hahahahaha");
    }
  }, [route.params?.BakerhomeScore3]);
  React.useEffect(() => {
    if (route.params?.BakerhomeScore4) {
      match.homeScoresBaker[3] = BakerhomeScore4;
      allMatches[index] = match;
      const _storeData2 = async () => {
        try {
          await AsyncStorage.setItem("games", JSON.stringify(allMatches));
        } catch (error) {
          // Error saving data
          console.log("error saving data");
        }
      };
      _storeData2();
      console.log(match, "dasfkfdaks;hahahahaha");
    }
  }, [route.params?.BakerhomeScore4]);
  React.useEffect(() => {
    if (route.params?.BakerhomeScore5) {
      match.homeScoresBaker[4] = BakerhomeScore5;
      allMatches[index] = match;
      const _storeData2 = async () => {
        try {
          await AsyncStorage.setItem("games", JSON.stringify(allMatches));
        } catch (error) {
          // Error saving data
          console.log("error saving data");
        }
      };
      _storeData2();
      console.log(match, "dasfkfdaks;hahahahaha");
    }
  }, [route.params?.BakerhomeScore5]);
  React.useEffect(() => {
    if (route.params?.BakerawayScore1) {
      match.awayScoresBaker[0] = BakerawayScore1;
      allMatches[index] = match;
      const _storeData2 = async () => {
        try {
          await AsyncStorage.setItem("games", JSON.stringify(allMatches));
        } catch (error) {
          // Error saving data
          console.log("error saving data");
        }
      };
      _storeData2();
      console.log(match, "dasfkfdaks;hahahahaha");
    }
  }, [route.params?.BakerawayScore1]);
  React.useEffect(() => {
    if (route.params?.BakerawayScore2) {
      match.awayScoresBaker[1] = BakerawayScore2;
      allMatches[index] = match;
      const _storeData2 = async () => {
        try {
          await AsyncStorage.setItem("games", JSON.stringify(allMatches));
        } catch (error) {
          // Error saving data
          console.log("error saving data");
        }
      };
      _storeData2();
      console.log(match, "dasfkfdaks;hahahahaha");
    }
  }, [route.params?.BakerawayScore2]);
  React.useEffect(() => {
    if (route.params?.BakerawayScore3) {
      match.awayScoresBaker[2] = BakerawayScore3;
      allMatches[index] = match;
      const _storeData2 = async () => {
        try {
          await AsyncStorage.setItem("games", JSON.stringify(allMatches));
        } catch (error) {
          // Error saving data
          console.log("error saving data");
        }
      };
      _storeData2();
      console.log(match, "dasfkfdaks;hahahahaha");
    }
  }, [route.params?.BakerawayScore3]);
  React.useEffect(() => {
    if (route.params?.BakerawayScore4) {
      match.awayScoresBaker[3] = BakerawayScore4;
      allMatches[index] = match;
      const _storeData2 = async () => {
        try {
          await AsyncStorage.setItem("games", JSON.stringify(allMatches));
        } catch (error) {
          // Error saving data
          console.log("error saving data");
        }
      };
      _storeData2();
      console.log(match, "dasfkfdaks;hahahahaha");
    }
  }, [route.params?.BakerawayScore4]);
  React.useEffect(() => {
    if (route.params?.BakerawayScore5) {
      match.awayScoresBaker[4] = BakerawayScore5;
      allMatches[index] = match;
      const _storeData2 = async () => {
        try {
          await AsyncStorage.setItem("games", JSON.stringify(allMatches));
        } catch (error) {
          // Error saving data
          console.log("error saving data");
        }
      };
      _storeData2();
      console.log(match, "dasfkfdaks;hahahahaha");
    }
  }, [route.params?.BakerawayScore5]);
  // React.useEffect(() => {
  //   if (route.params?.americanFrames) {
  //     match.americanFrames = americanFrames;
  //     allMatches[index] = match;
  //     const _storeData2 = async () => {
  //       try {
  //         await AsyncStorage.setItem("games", JSON.stringify(allMatches));
  //       } catch (error) {
  //         // Error saving data
  //         console.log("error saving data");
  //       }
  //     };
  //     _storeData2();
  //     console.log(match, "dasfkfdaks;hahahahaha");
  //   }
  // }, [route.params?.americanFrames]);
  var [homeScore, awayScore] = calculateFinalScore(
    homeScore1,
    homeScore2,
    homeScore3,
    homeScore4,
    homeScore5,
    homeScore6,
    awayScore1,
    awayScore2,
    awayScore3,
    awayScore4,
    awayScore5,
    awayScore6,
    BakerhomeScore1,
    BakerhomeScore2,
    BakerhomeScore3,
    BakerhomeScore4,
    BakerhomeScore5,
    BakerawayScore1,
    BakerawayScore2,
    BakerawayScore3,
    BakerawayScore4,
    BakerawayScore5
  );
  return (
    <Tab.Navigator
      screenOptions={{
        title:
          JSON.stringify(homeScore) +
          "        VS        " +
          JSON.stringify(awayScore),
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#ffffff",
          borderRadius: 15,
          height: 90,
          opacity: 0.9,
          shadowColor: "black",
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 5,
          alignContent: "center",
        },
        tabBarLabelStyle: { fontSize: 15, fontWeight: "bold" },
        headerTitleStyle: { top: 30 },
        headerBackgroundContainerStyle: {
          opacity: 0.6,
        },
        headerTransparent: true,
        // headerTitle: { BakerhomeScore },
        headerBackground: () => (
          <LinearGradient
            colors={["#7AB9FE", "#7AB9FE"]}
            style={{
              flex: 1,
              borderRadius: 100,
              shadowColor: "black",
              shadowOffset: { width: 0, height: 10 },
              shadowOpacity: 0.25,
              shadowRadius: 3.5,
              width: 250,
              top: 30,
              alignSelf: "center",
              elevation: 5,
              opacity: 0.8,
            }}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1.25 }}
          />
        ),
      }}
    >
      <Tab.Screen
        name="American 10"
        component={American10}
        initialParams={{
          match,
          allBowlers,
          index,
          allMatches,
        }}
        options={{
          headerStyle: {
            shadowColor: "black",
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.25,
            shadowRadius: 3.5,
            elevation: 5,
            backgroundColor: "#D92626",
          },
          tabBarLabel: "American 10",
          // headerTintColor:"white"
          tabBarIcon: ({ focused }) => (
            <View style={{}}>
              <Image
                source={require("./bowlingAmerican.png")}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 40,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Bakers"
        component={Bakers}
        initialParams={{
          allMatches,
          match,
          allBowlers,
          index,
        }}
        options={{
          headerStyle: {
            borderRadius: 20,
            shadowColor: "black",
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.25,
            shadowRadius: 3.5,
            elevation: 5,
          },
          tabBarLabel: "Baker",
          tabBarIcon: ({ focused }) => (
            <View style={{}}>
              <Image
                source={require("./bakerPic.png")}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 40,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;
