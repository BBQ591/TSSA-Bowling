import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Bakers({ route, navigation }) {
  const [currIndex, setcurrIndex] = useState(0);
  const closeModal = () => {
    match.bakerFrames[currIndex] = frames;
    match.bakerBowlers[currIndex] = [
      value,
      value1,
      value2,
      value3,
      value4,
      sub1,
      sub2,
    ];
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
    setaddTeams(false);
  };
  const [open, setOpen] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const openingModal = (index) => {
    setValue(match.bakerBowlers[index][0]);
    setValue1(match.bakerBowlers[index][1]);
    setValue2(match.bakerBowlers[index][2]);
    setValue3(match.bakerBowlers[index][3]);
    setValue4(match.bakerBowlers[index][4]);
    setSub1(match.bakerBowlers[index][5]);
    setSub2(match.bakerBowlers[index][6]);
    setcurrIndex(index);
    setFrames(match.bakerFrames[index]);
    setaddTeams(true);
  };
  const [value, setValue] = useState();
  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();
  const [value3, setValue3] = useState();
  const [value4, setValue4] = useState();
  const [sub1, setSub1] = useState();
  const [sub2, setSub2] = useState();
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
  const { match, allBowlers, index, allMatches } = route.params;
  const [frames, setFrames] = useState(match.bakerFrames[currIndex]);

  var temp = [];
  const [BakerhomeScore1, setBakerhomeScore1] = useState(
    match.homeScoresBaker[0]
  );
  const [BakerawayScore1, setBakerawayScore1] = useState(
    match.awayScoresBaker[0]
  );
  const [BakerhomeScore2, setBakerhomeScore2] = useState(
    match.homeScoresBaker[1]
  );
  const [BakerawayScore2, setBakerawayScore2] = useState(
    match.awayScoresBaker[1]
  );
  const [BakerhomeScore3, setBakerhomeScore3] = useState(
    match.homeScoresBaker[2]
  );
  const [BakerawayScore3, setBakerawayScore3] = useState(
    match.awayScoresBaker[2]
  );
  const [BakerhomeScore4, setBakerhomeScore4] = useState(
    match.homeScoresBaker[3]
  );
  const [BakerawayScore4, setBakerawayScore4] = useState(
    match.awayScoresBaker[3]
  );
  const [BakerhomeScore5, setBakerhomeScore5] = useState(
    match.homeScoresBaker[4]
  );
  const [BakerawayScore5, setBakerawayScore5] = useState(
    match.awayScoresBaker[4]
  );
  for (let i = 0; i < allBowlers.length; i++) {
    temp.push({ label: allBowlers[i].name, value: allBowlers[i].name });
  }
  const [currBowlers, setcurrBowlers] = useState(temp);
  const [addTeams, setaddTeams] = useState(false);

  return (
    <ScrollView>
      <Modal animationType="slide" transparent={true} visible={addTeams}>
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
              margin: 20,
              backgroundColor: "white",
              borderRadius: 20,
              padding: 35,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
              height: 650,
              width: "90%",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ width: "40%" }}>
                <DropDownPicker
                  maxHeight={110}
                  dropDownDirection="TOP"
                  open={open[0]}
                  value={value}
                  items={currBowlers}
                  setOpen={() => makeOpenBox(0)}
                  setValue={setValue}
                  placeholder="Select Bowler"
                  onClose={() => makeCloseBox(0)}
                />
              </View>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10 }}
              >
                Frames:{" "}
              </Text>
              <TextInput
                style={{
                  borderColor: "black",
                  borderWidth: 1,
                  borderRadius: 5,
                  height: 40,
                  textAlign: "center",
                  width: 30,
                }}
                value={frames[0][0] == "null" ? "" : frames[0][0]}
                returnKeyType="done"
                keyboardType="numeric"
                placeholder="0"
                onChangeText={(newText) => {
                  var temp = Array.from(frames);
                  temp[0][0] = newText;
                  setFrames(temp);
                }}
              ></TextInput>
              <TextInput
                style={{
                  borderColor: "black",
                  borderWidth: 1,
                  borderRadius: 5,
                  height: 40,
                  textAlign: "center",
                  width: 30,
                  marginLeft: 5,
                }}
                value={frames[0][1] == "null" ? "" : frames[0][1]}
                returnKeyType="done"
                keyboardType="numeric"
                placeholder="0"
                onChangeText={(newText) => {
                  var temp = Array.from(frames);
                  temp[0][1] = newText;
                  setFrames(temp);
                }}
              ></TextInput>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 30,
              }}
            >
              <View style={{ width: "40%" }}>
                <DropDownPicker
                  maxHeight={110}
                  dropDownDirection="TOP"
                  open={open[1]}
                  value={value1}
                  items={currBowlers}
                  setOpen={() => makeOpenBox(1)}
                  setValue={setValue1}
                  placeholder="Select Bowler"
                  onClose={() => makeCloseBox(1)}
                />
              </View>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10 }}
              >
                Frames:{" "}
              </Text>
              <TextInput
                style={{
                  borderColor: "black",
                  borderWidth: 1,
                  borderRadius: 5,
                  height: 40,
                  textAlign: "center",
                  width: 30,
                }}
                value={frames[1][0] == "null" ? "" : frames[1][0]}
                returnKeyType="done"
                keyboardType="numeric"
                placeholder="0"
                onChangeText={(newText) => {
                  var temp = Array.from(frames);
                  temp[1][0] = newText;
                  setFrames(temp);
                }}
              ></TextInput>
              <TextInput
                style={{
                  borderColor: "black",
                  borderWidth: 1,
                  borderRadius: 5,
                  height: 40,
                  textAlign: "center",
                  width: 30,
                  marginLeft: 5,
                }}
                value={frames[1][1] == "null" ? "" : frames[1][1]}
                returnKeyType="done"
                keyboardType="numeric"
                placeholder="0"
                onChangeText={(newText) => {
                  var temp = Array.from(frames);
                  temp[1][1] = newText;
                  setFrames(temp);
                }}
              ></TextInput>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 30,
              }}
            >
              <View style={{ width: "40%" }}>
                <DropDownPicker
                  maxHeight={110}
                  dropDownDirection="TOP"
                  open={open[2]}
                  value={value2}
                  items={currBowlers}
                  setOpen={() => makeOpenBox(2)}
                  setValue={setValue2}
                  placeholder="Select Bowler"
                  onClose={() => makeCloseBox(2)}
                />
              </View>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10 }}
              >
                Frames:{" "}
              </Text>
              <TextInput
                style={{
                  borderColor: "black",
                  borderWidth: 1,
                  borderRadius: 5,
                  height: 40,
                  textAlign: "center",
                  width: 30,
                }}
                value={frames[2][0] == "null" ? "" : frames[2][0]}
                returnKeyType="done"
                keyboardType="numeric"
                placeholder="0"
                onChangeText={(newText) => {
                  var temp = Array.from(frames);
                  temp[2][0] = newText;
                  setFrames(temp);
                }}
              ></TextInput>
              <TextInput
                style={{
                  borderColor: "black",
                  borderWidth: 1,
                  borderRadius: 5,
                  height: 40,
                  textAlign: "center",
                  width: 30,
                  marginLeft: 5,
                }}
                value={frames[2][1] == "null" ? "" : frames[2][1]}
                returnKeyType="done"
                keyboardType="numeric"
                placeholder="0"
                onChangeText={(newText) => {
                  var temp = Array.from(frames);
                  temp[2][1] = newText;
                  setFrames(temp);
                }}
              ></TextInput>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 30,
              }}
            >
              <View style={{ width: "40%" }}>
                <DropDownPicker
                  maxHeight={110}
                  dropDownDirection="TOP"
                  open={open[3]}
                  value={value3}
                  items={currBowlers}
                  setOpen={() => makeOpenBox(3)}
                  setValue={setValue3}
                  placeholder="Select Bowler"
                  onClose={() => makeCloseBox(3)}
                />
              </View>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10 }}
              >
                Frames:{" "}
              </Text>
              <TextInput
                style={{
                  borderColor: "black",
                  borderWidth: 1,
                  borderRadius: 5,
                  width: 30,
                  height: 40,
                  textAlign: "center",
                }}
                value={frames[3][0] == "null" ? "" : frames[3][0]}
                returnKeyType="done"
                keyboardType="numeric"
                placeholder="0"
                onChangeText={(newText) => {
                  var temp = Array.from(frames);
                  temp[3][0] = newText;
                  setFrames(temp);
                }}
              ></TextInput>
              <TextInput
                style={{
                  borderColor: "black",
                  borderWidth: 1,
                  borderRadius: 5,
                  width: 30,
                  height: 40,
                  textAlign: "center",
                  marginLeft: 5,
                }}
                value={frames[3][1] == "null" ? "" : frames[3][1]}
                returnKeyType="done"
                keyboardType="numeric"
                placeholder="0"
                onChangeText={(newText) => {
                  var temp = Array.from(frames);
                  temp[3][1] = newText;
                  setFrames(temp);
                }}
              ></TextInput>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 30,
              }}
            >
              <View style={{ width: "40%" }}>
                <DropDownPicker
                  maxHeight={110}
                  dropDownDirection="TOP"
                  open={open[4]}
                  value={value4}
                  items={currBowlers}
                  setOpen={() => makeOpenBox(4)}
                  setValue={setValue4}
                  placeholder="Select Bowler"
                  onClose={() => makeCloseBox(4)}
                />
              </View>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10 }}
              >
                Frames:{" "}
              </Text>
              <TextInput
                style={{
                  borderColor: "black",
                  borderWidth: 1,
                  borderRadius: 5,
                  width: 30,
                  height: 40,
                  textAlign: "center",
                }}
                value={frames[4][0] == "null" ? "" : frames[4][0]}
                returnKeyType="done"
                keyboardType="numeric"
                placeholder="0"
                onChangeText={(newText) => {
                  var temp = Array.from(frames);
                  temp[4][0] = newText;
                  setFrames(temp);
                }}
              ></TextInput>
              <TextInput
                style={{
                  borderColor: "black",
                  borderWidth: 1,
                  borderRadius: 5,
                  width: 30,
                  height: 40,
                  textAlign: "center",
                  marginLeft: 5,
                }}
                value={frames[4][1] == "null" ? "" : frames[4][1]}
                returnKeyType="done"
                keyboardType="numeric"
                placeholder="0"
                onChangeText={(newText) => {
                  var temp = Array.from(frames);
                  temp[4][1] = newText;
                  setFrames(temp);
                }}
              ></TextInput>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 30,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Sub 1:{"     "}
              </Text>
              <View style={{ width: "40%" }}>
                <DropDownPicker
                  maxHeight={110}
                  dropDownDirection="TOP"
                  open={open[5]}
                  value={sub1}
                  items={currBowlers}
                  setOpen={() => makeOpenBox(5)}
                  setValue={setSub1}
                  placeholder="Select Bowler"
                  onClose={() => makeCloseBox(5)}
                />
              </View>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10 }}
              >
                Frames:{" "}
              </Text>
              <TextInput
                style={{
                  borderColor: "black",
                  borderWidth: 1,
                  borderRadius: 5,
                  width: 30,
                  height: 40,
                  textAlign: "center",
                }}
                value={frames[5][0] == "null" ? "" : frames[5][0]}
                returnKeyType="done"
                keyboardType="numeric"
                placeholder="0"
                onChangeText={(newText) => {
                  var temp = Array.from(frames);
                  temp[5][0] = newText;
                  setFrames(temp);
                }}
              ></TextInput>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 30,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Sub 2:{"     "}
              </Text>
              <View style={{ width: "40%" }}>
                <DropDownPicker
                  maxHeight={110}
                  dropDownDirection="TOP"
                  open={open[6]}
                  value={sub2}
                  items={currBowlers}
                  setOpen={() => makeOpenBox(6)}
                  setValue={setSub2}
                  placeholder="Select Bowler"
                  onClose={() => makeCloseBox(6)}
                />
              </View>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10 }}
              >
                Frames:{" "}
              </Text>
              <TextInput
                style={{
                  borderColor: "black",
                  borderWidth: 1,
                  borderRadius: 5,
                  width: 30,
                  height: 40,
                  textAlign: "center",
                }}
                value={frames[6][0] == "null" ? "" : frames[6][0]}
                returnKeyType="done"
                keyboardType="numeric"
                placeholder="0"
                onChangeText={(newText) => {
                  var temp = Array.from(frames);
                  temp[6][0] = newText;
                  setFrames(temp);
                }}
              ></TextInput>
            </View>
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
                  marginTop: 30,
                },
              ]}
              onPress={() => closeModal()}
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
          </View>
        </View>
      </Modal>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          top: 70,
        }}
      >
        <View
          style={{
            shadowColor: "black",
            shadowOffset: { width: 10, height: 10 },
            shadowOpacity: 0.25,
            shadowRadius: 3.5,
            elevation: 5,
            width: 50,
            height: 500,
          }}
        >
          <LinearGradient
            style={{
              opacity: 0.7,

              height: "100%",
              justifyContent: "center",
              borderRadius: 10,
              marginLeft: 10,
              marginTop: 10,
            }}
            colors={["#257f2d", "#f2f2f2"]}
          >
            <Text
              style={{
                color: "white",
                fontSize: 35,
                textAlign: "center",
              }}
            >
              HOME
            </Text>
          </LinearGradient>
        </View>

        <View
          style={{
            justifyContent: "center",
            width: "80%",
            paddingRight: 20,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              paddingBottom: 20,
              height: 100,
              paddingTop: 20,
              justifyContent: "space-around",
            }}
            onPress={() => openingModal(0)}
          >
            <TextInput
              style={{
                borderColor: "black",
                borderWidth: 1,
                borderRadius: 10,
                width: 30,
                height: 30,
                marginRight: 10,
                textAlign: "center",
                width: 40,
              }}
              returnKeyType="done"
              placeholder="0"
              keyboardType="numeric"
              value={
                JSON.stringify(BakerhomeScore1) == "null"
                  ? ""
                  : JSON.stringify(BakerhomeScore1)
              }
              onChangeText={(newText) => {
                setBakerhomeScore1(parseInt(newText));
                navigation.navigate({
                  name: "Match",
                  params: { BakerhomeScore1: parseInt(newText) },
                  merge: true,
                });
              }}
            ></TextInput>
            <View
              style={{ justifyContent: "space-evenly", alignItems: "center" }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Baker Game 1
              </Text>
              <Text style={{ fontSize: 12, color: "grey" }}>
                Click Here to Edit Bowlers
              </Text>
            </View>

            <TextInput
              style={{
                borderColor: "black",
                borderWidth: 1,
                borderRadius: 10,
                width: 30,
                height: 30,
                marginLeft: 10,
                textAlign: "center",
                width: 40,
              }}
              value={
                JSON.stringify(BakerawayScore1) == "null"
                  ? ""
                  : JSON.stringify(BakerawayScore1)
              }
              returnKeyType="done"
              placeholder="0"
              keyboardType="numeric"
              onChangeText={(newText) => {
                setBakerawayScore1(parseInt(newText));
                navigation.navigate({
                  name: "Match",
                  params: { BakerawayScore1: parseInt(newText) },
                  merge: true,
                });
              }}
            ></TextInput>
          </TouchableOpacity>
          {/* seperator */}
          <View
            style={{ height: 1, backgroundColor: "grey", marginHorizontal: 10 }}
          />
          {/* seperator */}
          <TouchableOpacity
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              paddingBottom: 20,
              height: 100,
              paddingTop: 20,
              justifyContent: "space-around",
            }}
            onPress={() => openingModal(1)}
          >
            <TextInput
              style={{
                borderColor: "black",
                borderWidth: 1,
                borderRadius: 10,
                width: 30,
                height: 30,
                marginRight: 10,
                textAlign: "center",
                width: 40,
              }}
              value={
                JSON.stringify(BakerhomeScore2) == "null"
                  ? ""
                  : JSON.stringify(BakerhomeScore2)
              }
              returnKeyType="done"
              placeholder="0"
              keyboardType="numeric"
              onChangeText={(newText) => {
                setBakerhomeScore2(parseInt(newText));
                navigation.navigate({
                  name: "Match",
                  params: { BakerhomeScore2: parseInt(newText) },
                  merge: true,
                });
              }}
            ></TextInput>
            <View
              style={{ justifyContent: "space-evenly", alignItems: "center" }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Baker Game 2
              </Text>
              <Text style={{ fontSize: 12, color: "grey" }}>
                Click Here to Edit Bowlers
              </Text>
            </View>
            <TextInput
              style={{
                borderColor: "black",
                borderWidth: 1,
                borderRadius: 10,
                width: 30,
                height: 30,
                marginLeft: 10,
                textAlign: "center",
                width: 40,
              }}
              value={
                JSON.stringify(BakerawayScore2) == "null"
                  ? ""
                  : JSON.stringify(BakerawayScore2)
              }
              returnKeyType="done"
              placeholder="0"
              keyboardType="numeric"
              onChangeText={(newText) => {
                setBakerawayScore2(parseInt(newText));
                navigation.navigate({
                  name: "Match",
                  params: { BakerawayScore2: parseInt(newText) },
                  merge: true,
                });
              }}
            ></TextInput>
          </TouchableOpacity>

          {/* seperator */}
          <View
            style={{ height: 1, backgroundColor: "grey", marginHorizontal: 10 }}
          />
          {/* seperator */}
          <TouchableOpacity
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              paddingBottom: 20,
              height: 100,
              paddingTop: 20,
              justifyContent: "space-around",
            }}
            onPress={() => openingModal(2)}
          >
            <TextInput
              style={{
                borderColor: "black",
                borderWidth: 1,
                borderRadius: 10,
                width: 30,
                height: 30,
                marginRight: 10,
                textAlign: "center",
                width: 40,
              }}
              value={
                JSON.stringify(BakerhomeScore3) == "null"
                  ? ""
                  : JSON.stringify(BakerhomeScore3)
              }
              returnKeyType="done"
              placeholder="0"
              keyboardType="numeric"
              onChangeText={(newText) => {
                setBakerhomeScore3(parseInt(newText));
                navigation.navigate({
                  name: "Match",
                  params: { BakerhomeScore3: parseInt(newText) },
                  merge: true,
                });
              }}
            ></TextInput>
            <View
              style={{ justifyContent: "space-evenly", alignItems: "center" }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Baker Game 3
              </Text>
              <Text style={{ fontSize: 12, color: "grey" }}>
                Click Here to Edit Bowlers
              </Text>
            </View>
            <TextInput
              style={{
                borderColor: "black",
                borderWidth: 1,
                borderRadius: 10,
                width: 30,
                height: 30,
                marginLeft: 10,
                textAlign: "center",
                width: 40,
              }}
              value={
                JSON.stringify(BakerawayScore3) == "null"
                  ? ""
                  : JSON.stringify(BakerawayScore3)
              }
              returnKeyType="done"
              placeholder="0"
              keyboardType="numeric"
              onChangeText={(newText) => {
                setBakerawayScore3(parseInt(newText));
                navigation.navigate({
                  name: "Match",
                  params: { BakerhomeScore3: parseInt(newText) },
                  merge: true,
                });
              }}
            ></TextInput>
          </TouchableOpacity>
          {/* seperator */}
          <View
            style={{ height: 1, backgroundColor: "grey", marginHorizontal: 10 }}
          />
          {/* seperator */}
          <TouchableOpacity
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              paddingBottom: 20,
              height: 100,
              paddingTop: 20,
              justifyContent: "space-around",
            }}
            onPress={() => openingModal(3)}
          >
            <TextInput
              style={{
                borderColor: "black",
                borderWidth: 1,
                borderRadius: 10,
                width: 30,
                height: 30,
                marginRight: 10,
                textAlign: "center",
                width: 40,
              }}
              value={
                JSON.stringify(BakerhomeScore4) == "null"
                  ? ""
                  : JSON.stringify(BakerhomeScore4)
              }
              returnKeyType="done"
              placeholder="0"
              keyboardType="numeric"
              onChangeText={(newText) => {
                setBakerhomeScore4(parseInt(newText));
                navigation.navigate({
                  name: "Match",
                  params: { BakerhomeScore4: parseInt(newText) },
                  merge: true,
                });
              }}
            ></TextInput>
            <View
              style={{ justifyContent: "space-evenly", alignItems: "center" }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Baker Game 4
              </Text>
              <Text style={{ fontSize: 12, color: "grey" }}>
                Click Here to Edit Bowlers
              </Text>
            </View>
            <TextInput
              style={{
                borderColor: "black",
                borderWidth: 1,
                borderRadius: 10,
                width: 30,
                height: 30,
                marginLeft: 10,
                textAlign: "center",
                width: 40,
              }}
              value={
                JSON.stringify(BakerawayScore4) == "null"
                  ? ""
                  : JSON.stringify(BakerawayScore4)
              }
              returnKeyType="done"
              placeholder="0"
              keyboardType="numeric"
              onChangeText={(newText) => {
                setBakerawayScore4(parseInt(newText));
                navigation.navigate({
                  name: "Match",
                  params: { BakerawayScore4: parseInt(newText) },
                  merge: true,
                });
              }}
            ></TextInput>
          </TouchableOpacity>
          {/* seperator */}
          <View
            style={{ height: 1, backgroundColor: "grey", marginHorizontal: 10 }}
          />
          {/* seperator */}
          <TouchableOpacity
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              paddingBottom: 20,
              height: 100,
              paddingTop: 20,
              justifyContent: "space-around",
            }}
            onPress={() => openingModal(4)}
          >
            <TextInput
              style={{
                borderColor: "black",
                borderWidth: 1,
                borderRadius: 10,
                width: 30,
                height: 30,
                marginRight: 10,
                textAlign: "center",
                width: 40,
              }}
              value={
                JSON.stringify(BakerhomeScore5) == "null"
                  ? ""
                  : JSON.stringify(BakerhomeScore5)
              }
              returnKeyType="done"
              placeholder="0"
              keyboardType="numeric"
              onChangeText={(newText) => {
                setBakerhomeScore5(parseInt(newText));
                navigation.navigate({
                  name: "Match",
                  params: { BakerhomeScore5: parseInt(newText) },
                  merge: true,
                });
              }}
            ></TextInput>
            <View
              style={{ justifyContent: "space-evenly", alignItems: "center" }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Baker Game 5
              </Text>
              <Text style={{ fontSize: 12, color: "grey" }}>
                Click Here to Edit Bowlers
              </Text>
            </View>
            <TextInput
              style={{
                borderColor: "black",
                borderWidth: 1,
                borderRadius: 10,
                width: 30,
                height: 30,
                marginLeft: 10,
                textAlign: "center",
                width: 40,
              }}
              value={
                JSON.stringify(BakerawayScore5) == "null"
                  ? ""
                  : JSON.stringify(BakerawayScore5)
              }
              returnKeyType="done"
              placeholder="0"
              keyboardType="numeric"
              onChangeText={(newText) => {
                setBakerawayScore5(parseInt(newText));
                navigation.navigate({
                  name: "Match",
                  params: { BakerawayScore5: parseInt(newText) },
                  merge: true,
                });
              }}
            ></TextInput>
          </TouchableOpacity>
          {/* seperator */}
          <View
            style={{ height: 1, backgroundColor: "grey", marginHorizontal: 10 }}
          />
          {/* seperator */}
        </View>
        <View
          style={{
            shadowColor: "black",
            shadowOffset: { width: 10, height: 10 },
            shadowOpacity: 0.25,
            shadowRadius: 3.5,
            elevation: 5,
            width: 40,
            height: 500,
          }}
        >
          <LinearGradient
            style={{
              backgroundColor: "#26d9d9",
              opacity: 0.7,
              shadowColor: "black",
              shadowOffset: { width: 0, height: 10 },
              shadowOpacity: 0.25,
              shadowRadius: 3.5,
              elevation: 5,
              height: "100%",
              justifyContent: "center",
              borderRadius: 10,
              marginTop: 10,
              right: 20,
            }}
            colors={["black", "#f2f2f2"]}
          >
            <Text
              style={{
                color: "white",
                fontSize: 35,
                textAlign: "center",
              }}
            >
              AWAY
            </Text>
          </LinearGradient>
        </View>
      </View>
      {/* <View
        style={{
          paddingTop: 120,
          justifyContent: "space-evenly",
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 120,
        }}
      > */}
      {/* <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          {BakerhomeScore}
        </Text>
        <Image source={versus} style={{ height: 40, width: 40 }} />
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          {BakerawayScore}
        </Text>
      </View> */}
    </ScrollView>
  );
}
