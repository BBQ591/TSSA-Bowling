export default function calculateFinalScore(
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
) {
  var BakerhomeScore = 0;
  var BakerawayScore = 0;
  console.log(BakerawayScore1);
  if (
    JSON.stringify(BakerawayScore1) != "null" &&
    JSON.stringify(BakerawayScore1) != "null"
  ) {
    console.log("dont equal");
    if (BakerhomeScore1 > BakerawayScore1) {
      BakerhomeScore += 2;
    } else if (BakerawayScore1 == BakerhomeScore1) {
      BakerhomeScore += 1;
      BakerawayScore += 1;
    } else {
      BakerawayScore += 2;
    }
  }
  if (
    JSON.stringify(BakerawayScore2) != "null" &&
    JSON.stringify(BakerawayScore2) != "null"
  ) {
    if (BakerhomeScore2 > BakerawayScore2) {
      BakerhomeScore += 2;
    } else if (BakerawayScore2 == BakerhomeScore2) {
      BakerhomeScore += 1;
      BakerawayScore += 1;
    } else {
      BakerawayScore += 2;
    }
  }
  if (
    JSON.stringify(BakerawayScore3) != "null" &&
    JSON.stringify(BakerawayScore3) != "null"
  ) {
    if (BakerhomeScore3 > BakerawayScore3) {
      BakerhomeScore += 2;
    } else if (BakerawayScore3 == BakerhomeScore3) {
      BakerhomeScore += 1;
      BakerawayScore += 1;
    } else {
      BakerawayScore += 2;
    }
  }
  if (
    JSON.stringify(BakerawayScore4) != "null" &&
    JSON.stringify(BakerawayScore4) != "null"
  ) {
    if (BakerhomeScore4 > BakerawayScore4) {
      BakerhomeScore += 2;
    } else if (BakerawayScore4 == BakerhomeScore4) {
      BakerhomeScore += 1;
      BakerawayScore += 1;
    } else {
      BakerawayScore += 2;
    }
  }
  if (
    JSON.stringify(BakerawayScore5) != "null" &&
    JSON.stringify(BakerawayScore5) != "null"
  ) {
    if (BakerhomeScore5 > BakerawayScore5) {
      BakerhomeScore += 2;
    } else if (BakerawayScore5 == BakerhomeScore5) {
      BakerhomeScore += 1;
      BakerawayScore += 1;
    } else {
      BakerawayScore += 2;
    }
  }
  if (
    JSON.stringify(BakerawayScore1) != "null" &&
    JSON.stringify(BakerawayScore1) != "null" &&
    JSON.stringify(BakerawayScore2) != "null" &&
    JSON.stringify(BakerawayScore2) != "null" &&
    JSON.stringify(BakerawayScore3) != "null" &&
    JSON.stringify(BakerawayScore3) != "null" &&
    JSON.stringify(BakerawayScore4) != "null" &&
    JSON.stringify(BakerawayScore4) != "null" &&
    JSON.stringify(BakerawayScore5) != "null" &&
    JSON.stringify(BakerawayScore5) != "null"
  ) {
    if (
      BakerhomeScore1 +
        BakerhomeScore2 +
        BakerhomeScore3 +
        BakerhomeScore4 +
        BakerhomeScore5 >
      BakerawayScore1 +
        BakerawayScore2 +
        BakerawayScore3 +
        BakerawayScore4 +
        BakerawayScore5
    ) {
      BakerhomeScore += 2;
    } else if (
      BakerhomeScore1 +
        BakerhomeScore2 +
        BakerhomeScore3 +
        BakerhomeScore4 +
        BakerhomeScore5 <
      BakerawayScore1 +
        BakerawayScore2 +
        BakerawayScore3 +
        BakerawayScore4 +
        BakerawayScore5
    ) {
      BakerawayScore += 2;
    } else {
      BakerhomeScore += 1;
      BakerawayScore += 1;
    }
  }
  var homeScore = 0;
  var awayScore = 0;
  if (
    JSON.stringify(homeScore1) != "null" &&
    JSON.stringify(awayScore1) != "null"
  ) {
    if (homeScore1 > awayScore1) {
      homeScore += 1;
    } else if (awayScore1 > homeScore1) {
      awayScore += 1;
    } else {
      homeScore += 0.5;
      awayScore += 0.5;
    }
  }
  if (
    JSON.stringify(homeScore2) != "null" &&
    JSON.stringify(awayScore2) != "null"
  ) {
    if (homeScore2 > awayScore2) {
      homeScore += 1;
    } else if (awayScore2 > homeScore2) {
      awayScore += 1;
    } else {
      homeScore += 0.5;
      awayScore += 0.5;
    }
  }
  if (
    JSON.stringify(homeScore3) != "null" &&
    JSON.stringify(awayScore3) != "null"
  ) {
    if (homeScore3 > awayScore3) {
      homeScore += 1;
    } else if (awayScore3 > homeScore3) {
      awayScore += 1;
    } else {
      homeScore += 0.5;
      awayScore += 0.5;
    }
  }
  if (
    JSON.stringify(homeScore4) != "null" &&
    JSON.stringify(awayScore4) != "null"
  ) {
    if (homeScore4 > awayScore4) {
      homeScore += 1;
    } else if (awayScore4 > homeScore4) {
      awayScore += 1;
    } else {
      homeScore += 0.5;
      awayScore += 0.5;
    }
  }
  if (
    JSON.stringify(homeScore5) != "null" &&
    JSON.stringify(awayScore5) != "null"
  ) {
    if (homeScore5 > awayScore5) {
      homeScore += 1;
    } else if (awayScore5 > homeScore5) {
      awayScore += 1;
    } else {
      homeScore += 0.5;
      awayScore += 0.5;
    }
  }
  if (
    JSON.stringify(homeScore6) != "null" &&
    JSON.stringify(awayScore6) != "null"
  ) {
    if (homeScore6 > awayScore6) {
      homeScore += 1;
    } else if (awayScore6 > homeScore6) {
      awayScore += 1;
    } else {
      homeScore += 0.5;
      awayScore += 0.5;
    }
  }
  if (
    JSON.stringify(homeScore1) != "null" &&
    JSON.stringify(awayScore1) != "null" &&
    JSON.stringify(homeScore2) != "null" &&
    JSON.stringify(awayScore2) != "null" &&
    JSON.stringify(homeScore3) != "null" &&
    JSON.stringify(awayScore3) != "null" &&
    JSON.stringify(homeScore4) != "null" &&
    JSON.stringify(awayScore4) != "null" &&
    JSON.stringify(homeScore5) != "null" &&
    JSON.stringify(awayScore5) != "null" &&
    JSON.stringify(homeScore6) != "null" &&
    JSON.stringify(awayScore6) != "null"
  ) {
    if (
      homeScore1 +
        homeScore2 +
        homeScore3 +
        homeScore4 +
        homeScore5 +
        homeScore6 >
      awayScore1 +
        awayScore2 +
        awayScore3 +
        awayScore4 +
        awayScore5 +
        awayScore6
    ) {
      homeScore += 2;
    } else if (
      homeScore1 +
        homeScore2 +
        homeScore3 +
        homeScore4 +
        homeScore5 +
        homeScore6 <
      awayScore1 +
        awayScore2 +
        awayScore3 +
        awayScore4 +
        awayScore5 +
        awayScore6
    ) {
      awayScore += 2;
    } else {
      awayScore += 1;
      homeScore += 1;
    }
  }
  var homeTotalPoints = 0;
  var awayTotalPoints = 0;
  if (
    JSON.stringify(homeScore1) != "null" &&
    JSON.stringify(awayScore1) != "null" &&
    JSON.stringify(homeScore2) != "null" &&
    JSON.stringify(awayScore2) != "null" &&
    JSON.stringify(homeScore3) != "null" &&
    JSON.stringify(awayScore3) != "null" &&
    JSON.stringify(homeScore4) != "null" &&
    JSON.stringify(awayScore4) != "null" &&
    JSON.stringify(homeScore5) != "null" &&
    JSON.stringify(awayScore5) != "null" &&
    JSON.stringify(homeScore6) != "null" &&
    JSON.stringify(awayScore6) != "null" &&
    JSON.stringify(BakerawayScore1) != "null" &&
    JSON.stringify(BakerawayScore1) != "null" &&
    JSON.stringify(BakerawayScore2) != "null" &&
    JSON.stringify(BakerawayScore2) != "null" &&
    JSON.stringify(BakerawayScore3) != "null" &&
    JSON.stringify(BakerawayScore3) != "null" &&
    JSON.stringify(BakerawayScore4) != "null" &&
    JSON.stringify(BakerawayScore4) != "null" &&
    JSON.stringify(BakerawayScore5) != "null" &&
    JSON.stringify(BakerawayScore5) != "null"
  ) {
    if (
      homeScore1 +
        homeScore2 +
        homeScore3 +
        homeScore4 +
        homeScore5 +
        homeScore6 +
        BakerhomeScore1 +
        BakerhomeScore2 +
        BakerhomeScore3 +
        BakerhomeScore4 +
        BakerhomeScore5 >
      awayScore1 +
        awayScore2 +
        awayScore3 +
        awayScore4 +
        awayScore5 +
        awayScore6 +
        BakerawayScore1 +
        BakerawayScore2 +
        BakerawayScore3 +
        BakerawayScore4 +
        BakerawayScore5
    ) {
      homeTotalPoints += 3;
    } else if (
      homeScore1 +
        homeScore2 +
        homeScore3 +
        homeScore4 +
        homeScore5 +
        homeScore6 +
        BakerhomeScore1 +
        BakerhomeScore2 +
        BakerhomeScore3 +
        BakerhomeScore4 +
        BakerhomeScore5 <
      awayScore1 +
        awayScore2 +
        awayScore3 +
        awayScore4 +
        awayScore5 +
        awayScore6 +
        BakerawayScore1 +
        BakerawayScore2 +
        BakerawayScore3 +
        BakerawayScore4 +
        BakerawayScore5
    ) {
      awayTotalPoints += 3;
    } else {
      homeTotalPoints += 1.5;
      awayTotalPoints += 1.5;
    }
  }
  return [
    homeScore + BakerhomeScore + homeTotalPoints,
    awayScore + BakerawayScore + awayTotalPoints,
  ];
}
