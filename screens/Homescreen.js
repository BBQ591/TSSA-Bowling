import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  Button,
  Modal,
  TextInput,
  ScrollView,
  Image,
  Pressable,
  StyleSheet,
  ImageBackground,
  Animated,
} from "react-native";
import { Swipeable, TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import calculateFinalScore from "./calculateFinalScore";
import { SafeAreaView } from "react-native-safe-area-context";
import { useIsFocused } from "@react-navigation/native";
export default function Homescreen({ navigation }) {
  // AsyncStorage.clear();
  const background = require("./background.png");
  const background2 = require("./background2.png");
  const isFocused = useIsFocused();
  useEffect(() => {
    const _retrieveData = async () => {
      try {
        var games = await AsyncStorage.getItem("games");
        var bowlers = await AsyncStorage.getItem("bowlers");
        return [games, bowlers];
      } catch (error) {}
    };
    _retrieveData().then((games) => {
      if (JSON.parse(games[0]) != null) {
        setMatch(JSON.parse(games[0]));
      } else {
        setMatch([]);
      }
      if (JSON.parse(games[1]) != null) {
        setBowlers(JSON.parse(games[1]));
      } else {
        setBowlers([]);
      }
    });
  }, [isFocused]);

  const exitModalX = require("./exitFromModal.png");
  const [bowlerVisible, setAddBowlerVisible] = useState(false);
  const currDate = new Date();
  const [month, setMonth] = useState(currDate.getMonth() + 1);
  const [day, setDay] = useState(currDate.getDate());
  const [year, setYear] = useState(currDate.getFullYear());
  const closeAddBowler = (name) => {
    bowlers.push({ name: name, inGame: false, count: 0 });
    setbowlerName("");
    const _storeData2 = async () => {
      try {
        await AsyncStorage.setItem("bowlers", JSON.stringify(bowlers));
      } catch (error) {
        // Error saving data
        console.log("error saving data");
      }
    };
    _storeData2();
    setAddBowlerVisible(false);
  };
  const [bowlerName, setbowlerName] = useState("");
  const continueArrow = require("./continueArrow.png");
  const [match, setMatch] = useState([]);
  const [nameOfTeam, setName] = useState("");
  const bench = require("./bench.png");
  const [addTeamsView, setAddTeamsView] = useState(false);
  const [bowlers, setBowlers] = useState([]);
  var swipeoutBtns = [{ text: "Delete" }];
  const pressBowler = (index) => {
    if (!bowlers[index].inGame) {
      const tempBowlers = Array.from(bowlers);
      var count = 0;
      for (let i = 0; i < bowlers.length; i++) {
        if (bowlers[i].inGame == true) {
          count += 1;
        }
      }
      tempBowlers[index].count = count + 1;
      tempBowlers[index].inGame = true;
      setBowlers(tempBowlers);
    } else {
      const tempBowlers = Array.from(bowlers);

      tempBowlers[index].inGame = false;
      for (let i = 0; i < tempBowlers.length; i++) {
        if (tempBowlers[i].count > tempBowlers[index].count) {
          tempBowlers[i].count -= 1;
        }
      }
      tempBowlers[index].count = 0;
      setBowlers(tempBowlers);
    }
  };
  const closeAddMatch = () => {
    var currInGame = [];
    for (let i = 0; i < bowlers.length; i++) {
      if (bowlers[i].inGame) {
        currInGame.push([bowlers[i].name, bowlers[i].count]);
        bowlers[i].inGame = false;
        bowlers[i].count = 0;
      }
    }
    // sorts currInGame based on choosing
    var sortedcurrInGame = [];
    var visited = [];
    var currMinimum;
    var currMinimumIndex;
    for (let i = 0; i < currInGame.length; i++) {
      currMinimum = Infinity;
      for (let j = 0; j < currInGame.length; j++) {
        if (
          currInGame[j][1] < currMinimum &&
          visited.indexOf(currInGame[j]) == -1
        ) {
          currMinimum = currInGame[j][1];
          currMinimumIndex = j;
        }
      }
      visited.push(currInGame[currMinimumIndex]);
      sortedcurrInGame.push([currInGame[currMinimumIndex][0]]);
    }
    const currLength = sortedcurrInGame.length;
    for (let i = 0; i < 6 - currLength; i++) {
      sortedcurrInGame.push([]);
    }
    // end of sort
    var bakers = [];
    for (let i = 0; i < currLength; i++) {
      bakers.push(sortedcurrInGame[i][0]);
    }
    const currLength2 = bakers.length;
    for (let i = 0; i < 7 - currLength2; i++) {
      bakers.push("");
    }
    bakers[5] = "";

    match.push({
      name: nameOfTeam,
      bowlers: sortedcurrInGame,
      bakerBowlers: [bakers, bakers, bakers, bakers, bakers],
      homeScoresAmerican: [null, null, null, null, null, null],
      awayScoresAmerican: [null, null, null, null, null, null],
      homeScoresBaker: [null, null, null, null, null, null],
      awayScoresBaker: [null, null, null, null, null, null],
      date: month + "/" + day + "/" + year,
      americanFrames: ["", "", "", "", "", ""],
      bakerFrames: [
        [["", ""], ["", ""], ["", ""], ["", ""], ["", ""], [""], [""]],
        [["", ""], ["", ""], ["", ""], ["", ""], ["", ""], [""], [""]],
        [["", ""], ["", ""], ["", ""], ["", ""], ["", ""], [""], [""]],
        [["", ""], ["", ""], ["", ""], ["", ""], ["", ""], [""], [""]],
        [["", ""], ["", ""], ["", ""], ["", ""], ["", ""], [""], [""]],
      ],
    });
    setName("");
    const _storeData2 = async () => {
      try {
        await AsyncStorage.setItem("games", JSON.stringify(match));
      } catch (error) {
        // Error saving data
        console.log("error saving data");
      }
    };
    _storeData2();
    setBowlers(bowlers);
    setAddTeamsView(false);
  };
  const deleteMatch = (index) => {
    var temp = Array.from(match);
    temp.splice(index, 1);
    setMatch(temp);
    const _storeData2 = async () => {
      try {
        await AsyncStorage.setItem("games", JSON.stringify(temp));
      } catch (error) {
        // Error saving data
        console.log("error saving data");
      }
    };
    _storeData2();
  };
  const deleteBowler = (index) => {
    var temp = Array.from(bowlers);
    temp.splice(index, 1);
    setBowlers(temp);
    const _storeData2 = async () => {
      try {
        await AsyncStorage.setItem("bowlers", JSON.stringify(temp));
      } catch (error) {
        // Error saving data
        console.log("error saving data");
      }
    };
    _storeData2();
  };
  const RightActions2 = (progress, dragX, index) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1.6, 0],
    });

    return (
      <>
        <Animated.View
          style={{
            backgroundColor: "red",
            justifyContent: "center",
            transform: [{ scale }],
          }}
        >
          <TouchableOpacity
            style={{ width: "100%", height: "100%", justifyContent: "center" }}
            onPress={() => deleteBowler(index)}
          >
            <Animated.Text
              style={{
                color: "white",
                paddingHorizontal: 10,
                fontWeight: "600",
                // transform: [{ scale }],
              }}
            >
              Delete
            </Animated.Text>
          </TouchableOpacity>
        </Animated.View>
      </>
    );
  };
  const RightActions = (progress, dragX, index) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1.6, 0],
    });

    return (
      <>
        <Animated.View
          style={{
            backgroundColor: "red",
            justifyContent: "center",
            transform: [{ scale }],
          }}
        >
          <TouchableOpacity
            style={{ width: "100%", height: "100%", justifyContent: "center" }}
            onPress={() => deleteMatch(index)}
          >
            <Animated.Text
              style={{
                color: "white",
                paddingHorizontal: 10,
                fontWeight: "600",
                // transform: [{ scale }],
              }}
            >
              Delete
            </Animated.Text>
          </TouchableOpacity>
        </Animated.View>
      </>
    );
  };
  const addMatch = () => {
    setAddTeamsView(true);
  };
  const myItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: "grey",
          marginLeft: 10,
          marginRight: 10,
        }}
      />
    );
  };

  const myListEmpty1 = () => {
    return <View style={{ alignItems: "center" }}></View>;
  };
  const myListEmpty2 = () => {
    return (
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            padding: 20,
            fontSize: 22,
            marginTop: 5,
            flexDirection: "row",
            justifyContent: "space-between",
            textAlign: "center",
          }}
        >
          No Bowlers
        </Text>
      </View>
    );
  };
  const addBowler = () => {
    setAddBowlerVisible(true);
  };
  React.useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count

    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => addMatch()} title="Add Match" />
      ),
    });
  }, []);
  React.useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count

    navigation.setOptions({
      headerLeft: () => (
        <Button onPress={() => addBowler()} title="Add Bowler" />
      ),
    });
  }, []);
  return (
    <View>
      {match.length == 0 && (
        <ImageBackground
          source={background2}
          resizeMode="contain"
          imageStyle={{ opacity: 0.5 }}
        >
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                padding: 20,
                fontSize: 25,
                marginTop: 5,
                flexDirection: "row",
                justifyContent: "space-between",
                // textAlign: "center",
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Step 1:</Text>
              <Text> Click the top left corner to add bowlers (6 minimum)</Text>
            </Text>
            <Text
              style={{
                padding: 20,
                fontSize: 25,
                marginTop: 5,
                flexDirection: "row",
                justifyContent: "space-between",
                // textAlign: "center",
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Step 2:</Text>
              <Text> Click the top right corner to add a match</Text>
            </Text>

            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                paddingTop: "10%",
                paddingBottom: 20,
              }}
            >
              BOWLERS: {bowlers.length}
            </Text>
            <FlatList
              data={bowlers}
              renderItem={({ item, index }) => (
                <Swipeable
                  renderRightActions={(progress, dragX) =>
                    RightActions2(progress, dragX, index)
                  }
                >
                  <View
                    style={{
                      padding: 10,
                      fontSize: 15,
                      marginTop: 5,
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontSize: 22 }}>{item.name}</Text>
                  </View>
                </Swipeable>
              )}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={myItemSeparator}
              ListEmptyComponent={myListEmpty2}
              style={{
                height: 325,
                borderColor: "black",
                borderWidth: 1,
                borderRadius: 10,
                width: 200,
              }}
            />
          </View>
        </ImageBackground>
      )}

      {match && (
        <FlatList
          data={match}
          renderItem={({ item, index }) => (
            <Swipeable
              renderRightActions={(progress, dragX) =>
                RightActions(progress, dragX, index)
              }
            >
              <ImageBackground
                source={background}
                resizeMode="contain"
                imageStyle={{ opacity: 0.2 }}
              >
                <TouchableOpacity
                  style={{
                    padding: 20,
                    fontSize: 15,
                    flexDirection: "row",
                    height: 90,
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  onPress={() => {
                    navigation.navigate("Match", {
                      matchName: match[index].name,
                      match: match[index],
                      allBowlers: bowlers,
                      index: index,
                      allMatches: match,
                      homeScore1: match[index].homeScoresAmerican[0],
                      homeScore2: match[index].homeScoresAmerican[1],
                      homeScore3: match[index].homeScoresAmerican[2],
                      homeScore4: match[index].homeScoresAmerican[3],
                      homeScore5: match[index].homeScoresAmerican[4],
                      homeScore6: match[index].homeScoresAmerican[5],
                      awayScore1: match[index].awayScoresAmerican[0],
                      awayScore2: match[index].awayScoresAmerican[1],
                      awayScore3: match[index].awayScoresAmerican[2],
                      awayScore4: match[index].awayScoresAmerican[3],
                      awayScore5: match[index].awayScoresAmerican[4],
                      awayScore6: match[index].awayScoresAmerican[5],
                      BakerhomeScore1: match[index].homeScoresBaker[0],
                      BakerhomeScore2: match[index].homeScoresBaker[1],
                      BakerhomeScore3: match[index].homeScoresBaker[2],
                      BakerhomeScore4: match[index].homeScoresBaker[3],
                      BakerhomeScore5: match[index].homeScoresBaker[4],
                      BakerawayScore1: match[index].awayScoresBaker[0],
                      BakerawayScore2: match[index].awayScoresBaker[1],
                      BakerawayScore3: match[index].awayScoresBaker[2],
                      BakerawayScore4: match[index].awayScoresBaker[3],
                      BakerawayScore5: match[index].awayScoresBaker[4],
                    });
                  }}
                >
                  <View style={{ flexDirection: "column", flex: 2.5 }}>
                    <View
                      style={{
                        flexDirection: "row",
                        flex: 2.75,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 30,
                          color: "#a30200",
                        }}
                        numberOfLines={1}
                      >
                        {item.name}
                      </Text>
                    </View>

                    <View
                      style={{
                        alignItems: "flex-start",
                        flex: 1,
                      }}
                    >
                      {calculateFinalScore(
                        match[index].homeScoresAmerican[0],
                        match[index].homeScoresAmerican[1],
                        match[index].homeScoresAmerican[2],
                        match[index].homeScoresAmerican[3],
                        match[index].homeScoresAmerican[4],
                        match[index].homeScoresAmerican[5],
                        match[index].awayScoresAmerican[0],
                        match[index].awayScoresAmerican[1],
                        match[index].awayScoresAmerican[2],
                        match[index].awayScoresAmerican[3],
                        match[index].awayScoresAmerican[4],
                        match[index].awayScoresAmerican[5],
                        match[index].homeScoresBaker[0],
                        match[index].homeScoresBaker[1],
                        match[index].homeScoresBaker[2],
                        match[index].homeScoresBaker[3],
                        match[index].homeScoresBaker[4],
                        match[index].awayScoresBaker[0],
                        match[index].awayScoresBaker[1],
                        match[index].awayScoresBaker[2],
                        match[index].awayScoresBaker[3],
                        match[index].awayScoresBaker[4]
                      )[0] >
                        calculateFinalScore(
                          match[index].homeScoresAmerican[0],
                          match[index].homeScoresAmerican[1],
                          match[index].homeScoresAmerican[2],
                          match[index].homeScoresAmerican[3],
                          match[index].homeScoresAmerican[4],
                          match[index].homeScoresAmerican[5],
                          match[index].awayScoresAmerican[0],
                          match[index].awayScoresAmerican[1],
                          match[index].awayScoresAmerican[2],
                          match[index].awayScoresAmerican[3],
                          match[index].awayScoresAmerican[4],
                          match[index].awayScoresAmerican[5],
                          match[index].homeScoresBaker[0],
                          match[index].homeScoresBaker[1],
                          match[index].homeScoresBaker[2],
                          match[index].homeScoresBaker[3],
                          match[index].homeScoresBaker[4],
                          match[index].awayScoresBaker[0],
                          match[index].awayScoresBaker[1],
                          match[index].awayScoresBaker[2],
                          match[index].awayScoresBaker[3],
                          match[index].awayScoresBaker[4]
                        )[1] && (
                        <Text
                          style={{
                            fontSize: 10,
                            textAlign: "center",
                            color: "black",
                          }}
                        >
                          W{" "}
                          {
                            calculateFinalScore(
                              match[index].homeScoresAmerican[0],
                              match[index].homeScoresAmerican[1],
                              match[index].homeScoresAmerican[2],
                              match[index].homeScoresAmerican[3],
                              match[index].homeScoresAmerican[4],
                              match[index].homeScoresAmerican[5],
                              match[index].awayScoresAmerican[0],
                              match[index].awayScoresAmerican[1],
                              match[index].awayScoresAmerican[2],
                              match[index].awayScoresAmerican[3],
                              match[index].awayScoresAmerican[4],
                              match[index].awayScoresAmerican[5],
                              match[index].homeScoresBaker[0],
                              match[index].homeScoresBaker[1],
                              match[index].homeScoresBaker[2],
                              match[index].homeScoresBaker[3],
                              match[index].homeScoresBaker[4],
                              match[index].awayScoresBaker[0],
                              match[index].awayScoresBaker[1],
                              match[index].awayScoresBaker[2],
                              match[index].awayScoresBaker[3],
                              match[index].awayScoresBaker[4]
                            )[0]
                          }
                          :
                          {
                            calculateFinalScore(
                              match[index].homeScoresAmerican[0],
                              match[index].homeScoresAmerican[1],
                              match[index].homeScoresAmerican[2],
                              match[index].homeScoresAmerican[3],
                              match[index].homeScoresAmerican[4],
                              match[index].homeScoresAmerican[5],
                              match[index].awayScoresAmerican[0],
                              match[index].awayScoresAmerican[1],
                              match[index].awayScoresAmerican[2],
                              match[index].awayScoresAmerican[3],
                              match[index].awayScoresAmerican[4],
                              match[index].awayScoresAmerican[5],
                              match[index].homeScoresBaker[0],
                              match[index].homeScoresBaker[1],
                              match[index].homeScoresBaker[2],
                              match[index].homeScoresBaker[3],
                              match[index].homeScoresBaker[4],
                              match[index].awayScoresBaker[0],
                              match[index].awayScoresBaker[1],
                              match[index].awayScoresBaker[2],
                              match[index].awayScoresBaker[3],
                              match[index].awayScoresBaker[4]
                            )[1]
                          }
                        </Text>
                      )}
                      {calculateFinalScore(
                        match[index].homeScoresAmerican[0],
                        match[index].homeScoresAmerican[1],
                        match[index].homeScoresAmerican[2],
                        match[index].homeScoresAmerican[3],
                        match[index].homeScoresAmerican[4],
                        match[index].homeScoresAmerican[5],
                        match[index].awayScoresAmerican[0],
                        match[index].awayScoresAmerican[1],
                        match[index].awayScoresAmerican[2],
                        match[index].awayScoresAmerican[3],
                        match[index].awayScoresAmerican[4],
                        match[index].awayScoresAmerican[5],
                        match[index].homeScoresBaker[0],
                        match[index].homeScoresBaker[1],
                        match[index].homeScoresBaker[2],
                        match[index].homeScoresBaker[3],
                        match[index].homeScoresBaker[4],
                        match[index].awayScoresBaker[0],
                        match[index].awayScoresBaker[1],
                        match[index].awayScoresBaker[2],
                        match[index].awayScoresBaker[3],
                        match[index].awayScoresBaker[4]
                      )[0] <
                        calculateFinalScore(
                          match[index].homeScoresAmerican[0],
                          match[index].homeScoresAmerican[1],
                          match[index].homeScoresAmerican[2],
                          match[index].homeScoresAmerican[3],
                          match[index].homeScoresAmerican[4],
                          match[index].homeScoresAmerican[5],
                          match[index].awayScoresAmerican[0],
                          match[index].awayScoresAmerican[1],
                          match[index].awayScoresAmerican[2],
                          match[index].awayScoresAmerican[3],
                          match[index].awayScoresAmerican[4],
                          match[index].awayScoresAmerican[5],
                          match[index].homeScoresBaker[0],
                          match[index].homeScoresBaker[1],
                          match[index].homeScoresBaker[2],
                          match[index].homeScoresBaker[3],
                          match[index].homeScoresBaker[4],
                          match[index].awayScoresBaker[0],
                          match[index].awayScoresBaker[1],
                          match[index].awayScoresBaker[2],
                          match[index].awayScoresBaker[3],
                          match[index].awayScoresBaker[4]
                        )[1] && (
                        <Text
                          style={{
                            fontSize: 10,
                            textAlign: "center",
                            color: "black",
                          }}
                        >
                          L{" "}
                          {
                            calculateFinalScore(
                              match[index].homeScoresAmerican[0],
                              match[index].homeScoresAmerican[1],
                              match[index].homeScoresAmerican[2],
                              match[index].homeScoresAmerican[3],
                              match[index].homeScoresAmerican[4],
                              match[index].homeScoresAmerican[5],
                              match[index].awayScoresAmerican[0],
                              match[index].awayScoresAmerican[1],
                              match[index].awayScoresAmerican[2],
                              match[index].awayScoresAmerican[3],
                              match[index].awayScoresAmerican[4],
                              match[index].awayScoresAmerican[5],
                              match[index].homeScoresBaker[0],
                              match[index].homeScoresBaker[1],
                              match[index].homeScoresBaker[2],
                              match[index].homeScoresBaker[3],
                              match[index].homeScoresBaker[4],
                              match[index].awayScoresBaker[0],
                              match[index].awayScoresBaker[1],
                              match[index].awayScoresBaker[2],
                              match[index].awayScoresBaker[3],
                              match[index].awayScoresBaker[4]
                            )[0]
                          }
                          :
                          {
                            calculateFinalScore(
                              match[index].homeScoresAmerican[0],
                              match[index].homeScoresAmerican[1],
                              match[index].homeScoresAmerican[2],
                              match[index].homeScoresAmerican[3],
                              match[index].homeScoresAmerican[4],
                              match[index].homeScoresAmerican[5],
                              match[index].awayScoresAmerican[0],
                              match[index].awayScoresAmerican[1],
                              match[index].awayScoresAmerican[2],
                              match[index].awayScoresAmerican[3],
                              match[index].awayScoresAmerican[4],
                              match[index].awayScoresAmerican[5],
                              match[index].homeScoresBaker[0],
                              match[index].homeScoresBaker[1],
                              match[index].homeScoresBaker[2],
                              match[index].homeScoresBaker[3],
                              match[index].homeScoresBaker[4],
                              match[index].awayScoresBaker[0],
                              match[index].awayScoresBaker[1],
                              match[index].awayScoresBaker[2],
                              match[index].awayScoresBaker[3],
                              match[index].awayScoresBaker[4]
                            )[1]
                          }
                        </Text>
                      )}
                      {calculateFinalScore(
                        match[index].homeScoresAmerican[0],
                        match[index].homeScoresAmerican[1],
                        match[index].homeScoresAmerican[2],
                        match[index].homeScoresAmerican[3],
                        match[index].homeScoresAmerican[4],
                        match[index].homeScoresAmerican[5],
                        match[index].awayScoresAmerican[0],
                        match[index].awayScoresAmerican[1],
                        match[index].awayScoresAmerican[2],
                        match[index].awayScoresAmerican[3],
                        match[index].awayScoresAmerican[4],
                        match[index].awayScoresAmerican[5],
                        match[index].homeScoresBaker[0],
                        match[index].homeScoresBaker[1],
                        match[index].homeScoresBaker[2],
                        match[index].homeScoresBaker[3],
                        match[index].homeScoresBaker[4],
                        match[index].awayScoresBaker[0],
                        match[index].awayScoresBaker[1],
                        match[index].awayScoresBaker[2],
                        match[index].awayScoresBaker[3],
                        match[index].awayScoresBaker[4]
                      )[0] ==
                        calculateFinalScore(
                          match[index].homeScoresAmerican[0],
                          match[index].homeScoresAmerican[1],
                          match[index].homeScoresAmerican[2],
                          match[index].homeScoresAmerican[3],
                          match[index].homeScoresAmerican[4],
                          match[index].homeScoresAmerican[5],
                          match[index].awayScoresAmerican[0],
                          match[index].awayScoresAmerican[1],
                          match[index].awayScoresAmerican[2],
                          match[index].awayScoresAmerican[3],
                          match[index].awayScoresAmerican[4],
                          match[index].awayScoresAmerican[5],
                          match[index].homeScoresBaker[0],
                          match[index].homeScoresBaker[1],
                          match[index].homeScoresBaker[2],
                          match[index].homeScoresBaker[3],
                          match[index].homeScoresBaker[4],
                          match[index].awayScoresBaker[0],
                          match[index].awayScoresBaker[1],
                          match[index].awayScoresBaker[2],
                          match[index].awayScoresBaker[3],
                          match[index].awayScoresBaker[4]
                        )[1] && (
                        <Text
                          style={{
                            fontSize: 10,
                            textAlign: "center",
                            color: "black",
                          }}
                        >
                          T{" "}
                          {
                            calculateFinalScore(
                              match[index].homeScoresAmerican[0],
                              match[index].homeScoresAmerican[1],
                              match[index].homeScoresAmerican[2],
                              match[index].homeScoresAmerican[3],
                              match[index].homeScoresAmerican[4],
                              match[index].homeScoresAmerican[5],
                              match[index].awayScoresAmerican[0],
                              match[index].awayScoresAmerican[1],
                              match[index].awayScoresAmerican[2],
                              match[index].awayScoresAmerican[3],
                              match[index].awayScoresAmerican[4],
                              match[index].awayScoresAmerican[5],
                              match[index].homeScoresBaker[0],
                              match[index].homeScoresBaker[1],
                              match[index].homeScoresBaker[2],
                              match[index].homeScoresBaker[3],
                              match[index].homeScoresBaker[4],
                              match[index].awayScoresBaker[0],
                              match[index].awayScoresBaker[1],
                              match[index].awayScoresBaker[2],
                              match[index].awayScoresBaker[3],
                              match[index].awayScoresBaker[4]
                            )[0]
                          }
                          :
                          {
                            calculateFinalScore(
                              match[index].homeScoresAmerican[0],
                              match[index].homeScoresAmerican[1],
                              match[index].homeScoresAmerican[2],
                              match[index].homeScoresAmerican[3],
                              match[index].homeScoresAmerican[4],
                              match[index].homeScoresAmerican[5],
                              match[index].awayScoresAmerican[0],
                              match[index].awayScoresAmerican[1],
                              match[index].awayScoresAmerican[2],
                              match[index].awayScoresAmerican[3],
                              match[index].awayScoresAmerican[4],
                              match[index].awayScoresAmerican[5],
                              match[index].homeScoresBaker[0],
                              match[index].homeScoresBaker[1],
                              match[index].homeScoresBaker[2],
                              match[index].homeScoresBaker[3],
                              match[index].homeScoresBaker[4],
                              match[index].awayScoresBaker[0],
                              match[index].awayScoresBaker[1],
                              match[index].awayScoresBaker[2],
                              match[index].awayScoresBaker[3],
                              match[index].awayScoresBaker[4]
                            )[1]
                          }
                        </Text>
                      )}
                    </View>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      flex: 1,
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "right",
                        color: "black",
                        fontSize: 15,
                        position: "absolute",
                        right: 15,
                        top: -14,
                      }}
                    >
                      {item.date}
                    </Text>
                    <View style={{ position: "absolute", top: -10 }}>
                      <Image
                        source={continueArrow}
                        style={{
                          height: 10,
                          width: 10,
                          tintColor: "black",
                        }}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              </ImageBackground>
            </Swipeable>
          )}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={myItemSeparator}
          ListEmptyComponent={myListEmpty1}
        />
      )}
      <Modal animationType="slide" transparent={true} visible={addTeamsView}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22,
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 20,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              width: "80%",
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
              height: "70%",
              paddingBottom: 45,
              paddingLeft: 25,
              paddingRight: 25,
            }}
          >
            <View
              style={{
                alignItems: "flex-end",
                justifyContent: "flex-end",
                height: 20,
                width: 20,
                top: 15,
                right: 15,
                position: "absolute",
              }}
            >
              <TouchableOpacity
                style={{
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                }}
                onPress={() => {
                  setAddTeamsView(false);
                  setName("");
                }}
              >
                <Image
                  source={exitModalX}
                  style={{
                    height: 20,
                    width: 20,
                  }}
                />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: "center", height: "100%", margin: 0 }}>
              <TextInput
                style={{
                  borderColor: "black",
                  borderWidth: 1,
                  width: "90%",
                  borderRadius: 10,
                  textAlign: "center",
                  height: 50,
                  marginTop: 35,
                }}
                returnKeyType="done"
                onChangeText={(newText) => setName(newText)}
                placeholder="Enter Opponent School Name"
              ></TextInput>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                  marginBottom: 10,
                }}
              >
                <Text style={{ fontSize: 30, fontWeight: "bold" }}>Date: </Text>
                <TextInput
                  style={{
                    borderColor: "black",
                    borderWidth: 1,
                    width: "10%",
                    borderRadius: 5,
                    textAlign: "center",
                    height: 40,
                  }}
                  returnKeyType="done"
                  keyboardType="numeric"
                  onChangeText={(newText) => setMonth(newText)}
                  // placeholder="Enter Opponent School Name"
                  defaultValue={JSON.stringify(currDate.getMonth() + 1)}
                ></TextInput>
                <View>
                  <Text style={{ fontSize: 30 }}> / </Text>
                </View>
                <TextInput
                  style={{
                    borderColor: "black",
                    borderWidth: 1,
                    width: "10%",
                    borderRadius: 5,
                    textAlign: "center",
                    height: 40,
                  }}
                  returnKeyType="done"
                  keyboardType="numeric"
                  onChangeText={(newText) => setDay(newText)}
                  // placeholder="Enter Opponent School Name"
                  defaultValue={JSON.stringify(currDate.getDate())}
                ></TextInput>
                <View>
                  <Text style={{ fontSize: 30 }}> / </Text>
                </View>
                <TextInput
                  style={{
                    borderColor: "black",
                    borderWidth: 1,
                    width: "20%",
                    borderRadius: 5,
                    textAlign: "center",
                    height: 40,
                  }}
                  returnKeyType="done"
                  keyboardType="numeric"
                  onChangeText={(newText) => setYear(newText)}
                  // placeholder="Enter Opponent School Name"
                  defaultValue={JSON.stringify(currDate.getFullYear())}
                ></TextInput>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  paddingTop: 20,
                  textAlign: "center",
                  paddingBottom: 10,
                  fontWeight: "bold",
                  fontSize: 25,
                }}
              >
                Choose Six Bowlers
              </Text>

              <FlatList
                data={bowlers}
                renderItem={({ item, index }) => (
                  <Swipeable
                    renderRightActions={(progress, dragX) =>
                      RightActions2(progress, dragX, index)
                    }
                  >
                    <TouchableOpacity
                      style={{
                        padding: 20,
                        fontSize: 15,
                        marginTop: 5,
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                      onPress={() => pressBowler(index)}
                    >
                      <Text style={{}}>{item.name}</Text>
                      {item.inGame == false && (
                        <Image
                          source={bench}
                          style={{ width: 50, height: 25 }}
                        />
                      )}
                      {item.inGame == true && <Text>{item.count}</Text>}
                    </TouchableOpacity>
                  </Swipeable>
                )}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={myItemSeparator}
                ListEmptyComponent={myListEmpty2}
                style={{
                  height: 50,
                  borderColor: "black",
                  borderWidth: 1,
                  borderRadius: 10,
                  width: "80%",
                }}
              />
              {nameOfTeam.length != 0 && bowlers.length < 7 && (
                <Pressable
                  style={[
                    {
                      backgroundColor: "#2196F3",
                    },
                    {
                      borderRadius: 20,
                      padding: 10,
                      elevation: 2,
                      backgroundColor: "grey",
                      width: 80,
                      marginTop: 50,
                    },
                  ]}
                  onPress={() => closeAddMatch()}
                >
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Done
                  </Text>
                </Pressable>
              )}
            </View>
          </View>
        </View>
      </Modal>
      <Modal animationType="slide" transparent={true} visible={bowlerVisible}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22,
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 20,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              width: "80%",
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
              height: "27%",
              paddingBottom: 45,
              paddingLeft: 25,
              paddingRight: 25,
            }}
          >
            <View
              style={{
                alignItems: "flex-end",
                justifyContent: "flex-end",
                position: "absolute",
                height: 20,
                width: 20,
                top: 15,
                right: 15,
              }}
            >
              <TouchableOpacity
                style={{
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                }}
                onPress={() => {
                  setAddBowlerVisible(false);
                  setbowlerName("");
                }}
              >
                <Image style={{ height: 20, width: 20 }} source={exitModalX} />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: "center", height: "100%", margin: 0 }}>
              <TextInput
                style={{
                  borderColor: "black",
                  borderWidth: 1,
                  width: "90%",
                  borderRadius: 10,
                  textAlign: "center",
                  height: 50,
                  marginTop: 35,
                }}
                returnKeyType="done"
                onChangeText={(newText) => setbowlerName(newText)}
                placeholder="Bowler Name"
              ></TextInput>
              {bowlerName.length != 0 && (
                <Pressable
                  style={[
                    {
                      backgroundColor: "#2196F3",
                    },
                    {
                      borderRadius: 20,
                      padding: 10,
                      elevation: 2,
                      backgroundColor: "grey",
                      width: 80,
                      marginTop: 50,
                    },
                  ]}
                  onPress={() => closeAddBowler(bowlerName)}
                >
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Done
                  </Text>
                </Pressable>
              )}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
