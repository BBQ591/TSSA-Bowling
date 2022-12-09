import { Text, View, Image, ScrollView, TextInput, Button } from "react-native";
import { useEffect, useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function American10({ navigation, route }) {
  const versus = require("./versus.png");
  const { match, allBowlers, index, allMatches } = route.params;

  const [homeScore1, sethomeScore1] = useState(match.homeScoresAmerican[0]);
  const [homeScore2, sethomeScore2] = useState(match.homeScoresAmerican[1]);
  const [homeScore3, sethomeScore3] = useState(match.homeScoresAmerican[2]);
  const [homeScore4, sethomeScore4] = useState(match.homeScoresAmerican[3]);
  const [homeScore5, sethomeScore5] = useState(match.homeScoresAmerican[4]);
  const [homeScore6, sethomeScore6] = useState(match.homeScoresAmerican[5]);
  const [awayScore1, setawayScore1] = useState(match.awayScoresAmerican[0]);
  const [awayScore2, setawayScore2] = useState(match.awayScoresAmerican[1]);
  const [awayScore3, setawayScore3] = useState(match.awayScoresAmerican[2]);
  const [awayScore4, setawayScore4] = useState(match.awayScoresAmerican[3]);
  const [awayScore5, setawayScore5] = useState(match.awayScoresAmerican[4]);
  const [awayScore6, setawayScore6] = useState(match.awayScoresAmerican[5]);
  const [frames, setFrames] = useState(match.americanFrames);
  console.log(frames, "frames");
  const [open, setOpen] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const changingFrames = (indexer, inputer) => {
    var temp = Array.from(frames);
    temp[indexer] = inputer;
    setFrames(temp);
    allMatches[index].americanFrames = temp;
    console.log(temp);
    const _storeData2 = async () => {
      try {
        await AsyncStorage.setItem("games", JSON.stringify(allMatches));
      } catch (error) {
        // Error saving data
        console.log("error saving data");
      }
    };
    _storeData2();
  };
  const [value, setValue] = useState(match.bowlers[0]);

  const [value1, setValue1] = useState(match.bowlers[1]);
  const [value2, setValue2] = useState(match.bowlers[2]);
  const [value3, setValue3] = useState(match.bowlers[3]);
  const [value4, setValue4] = useState(match.bowlers[4]);
  const [value5, setValue5] = useState(match.bowlers[5]);
  //   for the following useEffects, save data there, that is when the bowlers change
  useEffect(() => {
    match.bowlers[0] = Array.from(value);
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
  }, [value]);
  useEffect(() => {
    match.bowlers[1] = Array.from(value1);
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
  }, [value1]);
  useEffect(() => {
    match.bowlers[2] = Array.from(value2);
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
  }, [value2]);
  useEffect(() => {
    match.bowlers[3] = Array.from(value3);
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
  }, [value3]);
  useEffect(() => {
    match.bowlers[4] = Array.from(value4);
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
  }, [value4]);
  useEffect(() => {
    match.bowlers[5] = Array.from(value5);
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
  }, [value5]);
  const makeOpenBox = (index) => {
    var temp = Array.from(open);
    temp[index] = true;
    setOpen(temp);
  };
  const makeCloseBox = (index) => {
    var temp = Array.from(open);
    temp[index] = false;
    setOpen(temp);
  };
  var temp2 = [];
  for (let i = 0; i < match.bowlers.length; i++) {
    temp2.push([match.bowlers[i], match.name + " " + (i + 1)]);
  }
  const [matchUps, setMatchUps] = useState(temp2);
  //   useEffect(() => {}, []);
  var temp = [];
  for (let i = 0; i < allBowlers.length; i++) {
    temp.push({ label: allBowlers[i].name, value: allBowlers[i].name });
  }
  const [currBowlers, setcurrBowlers] = useState(temp);
  return (
    <ScrollView nestedScrollEnabled={true}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          top: 70,
        }}
      >
        <View
          style={{
            width: "40%",
            marginBottom: 10,
            padding: 20,
            height: open[0] ? 275 : 80,
          }}
        >
          <DropDownPicker
            max={2}
            showArrowIcon={value && value.length > 1 ? false : true}
            multiple={true}
            // mode={value.length > 1 ? "BADGE" : "BADGE"}
            style={{ justifyContent: "center" }}
            dropDownDirection="BOTTOM"
            open={open[0]}
            value={value}
            items={currBowlers}
            setOpen={() => makeOpenBox(0)}
            setValue={setValue}
            mode="BADGE"
            placeholder="Select Bowler"
            onClose={() => makeCloseBox(0)}
          />
        </View>
        <TextInput
          style={{
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 10,
            width: 30,
            height: 30,
            marginLeft: -10,
            marginRight: 10,
            textAlign: "center",
            width: 40,
          }}
          returnKeyType="done"
          // defaultValue={""}
          value={
            JSON.stringify(homeScore1) == "null"
              ? ""
              : JSON.stringify(homeScore1)
          }
          placeholder="0"
          keyboardType="numeric"
          onChangeText={(newText) => {
            sethomeScore1(parseInt(newText));
            navigation.navigate({
              name: "Match",
              params: { homeScore1: parseInt(newText) },
              merge: true,
            });
          }}
        ></TextInput>
        <Image source={versus} style={{ height: 30, width: 30 }} />
        <TextInput
          style={{
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 10,
            width: 30,
            height: 30,
            marginLeft: 10,
            marginRight: -10,
            textAlign: "center",
            width: 40,
          }}
          value={
            JSON.stringify(awayScore1) == "null"
              ? ""
              : JSON.stringify(awayScore1)
          }
          returnKeyType="done"
          keyboardType="numeric"
          placeholder="0"
          onChangeText={(newText) => {
            setawayScore1(parseInt(newText));
            navigation.navigate({
              name: "Match",
              params: { awayScore1: parseInt(newText) },
              merge: true,
            });
          }}
        ></TextInput>
        <View
          style={{
            padding: 20,
            flex: 1,
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", textAlign: "center" }}>
            {matchUps[0][1]}
          </Text>
        </View>
      </View>
      {value && value.length > 1 && (
        <View
          style={{
            paddingBottom: 20,
            paddingLeft: 20,
            flexDirection: "row",
            alignItems: "center",
            top: 70,
          }}
        >
          <Text>Sub-in Frame:</Text>
          <TextInput
            style={{
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 10,
              width: 30,
              height: 30,
              marginLeft: 10,
              marginRight: -10,
              textAlign: "center",
              width: 40,
            }}
            value={frames[0] == "null" ? "" : frames[0]}
            returnKeyType="done"
            keyboardType="numeric"
            placeholder="0"
            onChangeText={(newText) => changingFrames(0, newText)}
          ></TextInput>
        </View>
      )}
      {/* seperator */}
      <View
        style={{
          height: 1,
          backgroundColor: "grey",
          marginHorizontal: 10,
          top: 70,
        }}
      />
      {/* seperator */}
      <View
        style={{
          top: 70,

          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "40%",
            marginBottom: 10,
            padding: 20,
            height: open[1] ? 275 : 80,
          }}
        >
          <DropDownPicker
            max={2}
            showArrowIcon={value1 && value1.length > 1 ? false : true}
            mode="BADGE"
            multiple={true}
            dropDownDirection="BOTTOM"
            open={open[1]}
            value={value1}
            items={currBowlers}
            setOpen={() => makeOpenBox(1)}
            setValue={setValue1}
            placeholder="Select Bowler"
            onClose={() => makeCloseBox(1)}
          />
        </View>
        <TextInput
          style={{
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 10,
            width: 30,
            height: 30,
            marginLeft: -10,
            marginRight: 10,
            textAlign: "center",
            width: 40,
          }}
          value={
            JSON.stringify(homeScore2) == "null"
              ? ""
              : JSON.stringify(homeScore2)
          }
          returnKeyType="done"
          keyboardType="numeric"
          placeholder="0"
          onChangeText={(newText) => {
            sethomeScore2(parseInt(newText));
            navigation.navigate({
              name: "Match",
              params: { homeScore2: parseInt(newText) },
              merge: true,
            });
          }}
        ></TextInput>
        <Image source={versus} style={{ height: 30, width: 30 }} />
        <TextInput
          style={{
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 10,
            width: 30,
            height: 30,
            marginLeft: 10,
            marginRight: -10,
            textAlign: "center",
            width: 40,
          }}
          value={
            JSON.stringify(awayScore2) == "null"
              ? ""
              : JSON.stringify(awayScore2)
          }
          returnKeyType="done"
          placeholder="0"
          keyboardType="numeric"
          onChangeText={(newText) => {
            setawayScore2(parseInt(newText));
            navigation.navigate({
              name: "Match",
              params: { awayScore2: parseInt(newText) },
              merge: true,
            });
          }}
        ></TextInput>
        <View style={{ padding: 20, flex: 1, alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", textAlign: "center" }}>
            {matchUps[1][1]}
          </Text>
        </View>
      </View>
      {value1 && value1.length > 1 && (
        <View
          style={{
            paddingBottom: 20,
            paddingLeft: 20,
            flexDirection: "row",
            alignItems: "center",
            top: 70,
          }}
        >
          <Text>Sub-in Frame:</Text>
          <TextInput
            style={{
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 10,
              width: 30,
              height: 30,
              marginLeft: 10,
              marginRight: -10,
              textAlign: "center",
              width: 40,
            }}
            value={frames[1] == "null" ? "" : frames[1]}
            returnKeyType="done"
            keyboardType="numeric"
            placeholder="0"
            onChangeText={(newText) => changingFrames(1, newText)}
          ></TextInput>
        </View>
      )}
      {/* seperator */}
      <View
        style={{
          height: 1,
          backgroundColor: "grey",
          marginHorizontal: 10,
          top: 70,
        }}
      />
      {/* seperator */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          top: 70,
        }}
      >
        <View
          style={{
            width: "40%",
            marginBottom: 10,
            padding: 20,
            height: open[2] ? 275 : 80,
          }}
        >
          <DropDownPicker
            max={2}
            showArrowIcon={value2 && value2.length > 1 ? false : true}
            mode="BADGE"
            multiple={true}
            dropDownDirection="BOTTOM"
            open={open[2]}
            value={value2}
            items={currBowlers}
            setOpen={() => makeOpenBox(2)}
            setValue={setValue2}
            placeholder="Select Bowler"
            onClose={() => makeCloseBox(2)}
          />
        </View>
        <TextInput
          style={{
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 10,
            width: 30,
            height: 30,
            marginLeft: -10,
            marginRight: 10,
            textAlign: "center",
            width: 40,
          }}
          value={
            JSON.stringify(homeScore3) == "null"
              ? ""
              : JSON.stringify(homeScore3)
          }
          returnKeyType="done"
          keyboardType="numeric"
          placeholder="0"
          onChangeText={(newText) => {
            sethomeScore3(parseInt(newText));
            navigation.navigate({
              name: "Match",
              params: { homeScore3: parseInt(newText) },
              merge: true,
            });
          }}
        ></TextInput>
        <Image source={versus} style={{ height: 30, width: 30 }} />
        <TextInput
          style={{
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 10,
            width: 30,
            height: 30,
            marginLeft: 10,
            marginRight: -10,
            textAlign: "center",
            width: 40,
          }}
          value={
            JSON.stringify(awayScore3) == "null"
              ? ""
              : JSON.stringify(awayScore3)
          }
          returnKeyType="done"
          keyboardType="numeric"
          placeholder="0"
          onChangeText={(newText) => {
            setawayScore3(parseInt(newText));
            navigation.navigate({
              name: "Match",
              params: { awayScore3: parseInt(newText) },
              merge: true,
            });
          }}
        ></TextInput>
        <View style={{ padding: 20, flex: 1, alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", textAlign: "center" }}>
            {matchUps[2][1]}
          </Text>
        </View>
      </View>
      {value2 && value2.length > 1 && (
        <View
          style={{
            paddingBottom: 20,
            paddingLeft: 20,
            flexDirection: "row",
            alignItems: "center",
            top: 70,
          }}
        >
          <Text>Sub-in Frame:</Text>
          <TextInput
            style={{
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 10,
              width: 30,
              height: 30,
              marginLeft: 10,
              marginRight: -10,
              textAlign: "center",
              width: 40,
            }}
            value={frames[2] == "null" ? "" : frames[2]}
            returnKeyType="done"
            keyboardType="numeric"
            placeholder="0"
            onChangeText={(newText) => changingFrames(2, newText)}
          ></TextInput>
        </View>
      )}
      {/* seperator */}
      <View
        style={{
          height: 1,
          backgroundColor: "grey",
          marginHorizontal: 10,
          top: 70,
        }}
      />
      {/* seperator */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          top: 70,
        }}
      >
        <View
          style={{
            width: "40%",
            marginBottom: 10,
            padding: 20,
            height: open[3] ? 275 : 80,
          }}
        >
          <DropDownPicker
            max={2}
            showArrowIcon={value3 && value3.length > 1 ? false : true}
            mode="BADGE"
            multiple={true}
            dropDownDirection="BOTTOM"
            open={open[3]}
            value={value3}
            items={currBowlers}
            setOpen={() => makeOpenBox(3)}
            setValue={setValue3}
            placeholder="Select Bowler"
            onClose={() => makeCloseBox(3)}
          />
        </View>
        <TextInput
          style={{
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 10,
            width: 30,
            height: 30,
            marginLeft: -10,
            marginRight: 10,
            textAlign: "center",
            width: 40,
          }}
          value={
            JSON.stringify(homeScore4) == "null"
              ? ""
              : JSON.stringify(homeScore4)
          }
          returnKeyType="done"
          keyboardType="numeric"
          placeholder="0"
          onChangeText={(newText) => {
            sethomeScore4(parseInt(newText));
            navigation.navigate({
              name: "Match",
              params: { homeScore4: parseInt(newText) },
              merge: true,
            });
          }}
        ></TextInput>
        <Image source={versus} style={{ height: 30, width: 30 }} />
        <TextInput
          style={{
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 10,
            width: 30,
            height: 30,
            marginLeft: 10,
            marginRight: -10,
            textAlign: "center",
            width: 40,
          }}
          value={
            JSON.stringify(awayScore4) == "null"
              ? ""
              : JSON.stringify(awayScore4)
          }
          returnKeyType="done"
          keyboardType="numeric"
          placeholder="0"
          onChangeText={(newText) => {
            setawayScore4(parseInt(newText));
            navigation.navigate({
              name: "Match",
              params: { awayScore4: parseInt(newText) },
              merge: true,
            });
          }}
        ></TextInput>
        <View style={{ padding: 20, flex: 1, alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", textAlign: "center" }}>
            {matchUps[3][1]}
          </Text>
        </View>
      </View>
      {value3 && value3.length > 1 && (
        <View
          style={{
            paddingBottom: 20,
            paddingLeft: 20,
            flexDirection: "row",
            alignItems: "center",
            top: 70,
          }}
        >
          <Text>Sub-in Frame:</Text>
          <TextInput
            style={{
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 10,
              width: 30,
              height: 30,
              marginLeft: 10,
              marginRight: -10,
              textAlign: "center",
              width: 40,
            }}
            value={frames[3] == "null" ? "" : frames[3]}
            returnKeyType="done"
            keyboardType="numeric"
            placeholder="0"
            onChangeText={(newText) => changingFrames(3, newText)}
          ></TextInput>
        </View>
      )}
      {/* seperator */}
      <View
        style={{
          height: 1,
          backgroundColor: "grey",
          marginHorizontal: 10,
          top: 70,
        }}
      />
      {/* seperator */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          top: 70,
        }}
      >
        <View
          style={{
            width: "40%",
            marginBottom: 10,
            padding: 20,
            height: open[4] ? 275 : 80,
          }}
        >
          <DropDownPicker
            max={2}
            showArrowIcon={value4 && value4.length > 1 ? false : true}
            mode="BADGE"
            multiple={true}
            dropDownDirection="BOTTOM"
            open={open[4]}
            value={value4}
            items={currBowlers}
            setOpen={() => makeOpenBox(4)}
            setValue={setValue4}
            placeholder="Select Bowler"
            onClose={() => makeCloseBox(4)}
          />
        </View>
        <TextInput
          style={{
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 10,
            width: 30,
            height: 30,
            marginLeft: -10,
            marginRight: 10,
            textAlign: "center",
            width: 40,
          }}
          value={
            JSON.stringify(homeScore5) == "null"
              ? ""
              : JSON.stringify(homeScore5)
          }
          returnKeyType="done"
          keyboardType="numeric"
          onChangeText={(newText) => {
            sethomeScore5(parseInt(newText));
            navigation.navigate({
              name: "Match",
              params: { homeScore5: parseInt(newText) },
              merge: true,
            });
          }}
          placeholder="0"
        ></TextInput>
        <Image source={versus} style={{ height: 30, width: 30 }} />
        <TextInput
          style={{
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 10,
            width: 30,
            height: 30,
            marginLeft: 10,
            marginRight: -10,
            textAlign: "center",
            width: 40,
          }}
          value={
            JSON.stringify(awayScore5) == "null"
              ? ""
              : JSON.stringify(awayScore5)
          }
          returnKeyType="done"
          keyboardType="numeric"
          placeholder="0"
          onChangeText={(newText) => {
            setawayScore5(parseInt(newText));
            navigation.navigate({
              name: "Match",
              params: { awayScore5: parseInt(newText) },
              merge: true,
            });
          }}
        ></TextInput>
        <View style={{ padding: 20, flex: 1, alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", textAlign: "center" }}>
            {matchUps[4][1]}
          </Text>
        </View>
      </View>
      {value4 && value4.length > 1 && (
        <View
          style={{
            paddingBottom: 20,
            paddingLeft: 20,
            flexDirection: "row",
            alignItems: "center",
            top: 70,
          }}
        >
          <Text>Sub-in Frame:</Text>
          <TextInput
            style={{
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 10,
              width: 30,
              height: 30,
              marginLeft: 10,
              marginRight: -10,
              textAlign: "center",
              width: 40,
            }}
            value={frames[4] == "null" ? "" : frames[4]}
            returnKeyType="done"
            keyboardType="numeric"
            placeholder="0"
            onChangeText={(newText) => changingFrames(4, newText)}
          ></TextInput>
        </View>
      )}
      {/* seperator */}
      <View
        style={{
          height: 1,
          backgroundColor: "grey",
          marginHorizontal: 10,
          top: 70,
        }}
      />
      {/* seperator */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          top: 70,
          paddingBottom: 200,
        }}
      >
        <View
          style={{
            width: "40%",
            marginBottom: 10,
            padding: 20,
            height: open[5] ? 275 : 80,
          }}
        >
          <DropDownPicker
            max={2}
            showArrowIcon={value5 && value5.length > 1 ? false : true}
            mode="BADGE"
            multiple={true}
            dropDownDirection="BOTTOM"
            open={open[5]}
            value={value5}
            items={currBowlers}
            setOpen={() => makeOpenBox(5)}
            setValue={setValue5}
            placeholder="Select Bowler"
            onClose={() => makeCloseBox(5)}
          />
        </View>
        <TextInput
          style={{
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 10,
            width: 30,
            height: 30,
            marginLeft: -10,
            marginRight: 10,
            textAlign: "center",
            width: 40,
          }}
          value={
            JSON.stringify(homeScore6) == "null"
              ? ""
              : JSON.stringify(homeScore6)
          }
          returnKeyType="done"
          keyboardType="numeric"
          placeholder="0"
          onChangeText={(newText) => {
            sethomeScore6(parseInt(newText));
            navigation.navigate({
              name: "Match",
              params: { homeScore6: parseInt(newText) },
              merge: true,
            });
          }}
        ></TextInput>
        <Image source={versus} style={{ height: 30, width: 30 }} />
        <TextInput
          style={{
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 10,
            width: 30,
            height: 30,
            marginLeft: 10,
            marginRight: -10,
            textAlign: "center",
            width: 40,
          }}
          value={
            JSON.stringify(awayScore6) == "null"
              ? ""
              : JSON.stringify(awayScore6)
          }
          keyboardType="numeric"
          returnKeyType="done"
          placeholder="0"
          onChangeText={(newText) => {
            setawayScore6(parseInt(newText));
            navigation.navigate({
              name: "Match",
              params: { homeScore6: parseInt(newText) },
              merge: true,
            });
          }}
        ></TextInput>
        <View style={{ padding: 20, flex: 1, alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", textAlign: "center" }}>
            {matchUps[5][1]}
          </Text>
        </View>
      </View>
      {value5 && value5.length > 1 && (
        <View
          style={{
            paddingBottom: 20,
            paddingLeft: 20,
            flexDirection: "row",
            alignItems: "center",
            top: 70,
          }}
        >
          <Text>Sub-in Frame:</Text>
          <TextInput
            style={{
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 10,
              width: 30,
              height: 30,
              marginLeft: 10,
              marginRight: -10,
              textAlign: "center",
              width: 40,
            }}
            value={frames[5] == "null" ? "" : frames[5]}
            returnKeyType="done"
            keyboardType="numeric"
            placeholder="0"
            onChangeText={(newText) => changingFrames(5, newText)}
          ></TextInput>
        </View>
      )}
      {/* <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          paddingBottom: 30,
          borderTopColor: "#575f63",
          borderTopWidth: 10,
          paddingBottom: 200,
          top: 70,
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>{homeScore}</Text>
        <Image source={versus} style={{ height: 80, width: 80 }} />
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>{awayScore}</Text>
      </View> */}
    </ScrollView>
  );
}
