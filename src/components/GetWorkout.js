import React from "react";
import { excerciseData } from "./excercises";

class GetWorkout extends React.Component {
  constructor(props) {
    super(props);
    this.excercise = excerciseData;
  }

  // extracts chest from array of objects
  // #TODO refactor using map
  getChestExcercises = (excercise) => {
    const chestArr = [];

    excercise.forEach((element) => {
      if (element.body_part === "Chest") {
        // push entire element so body part, excercise and sets are all extracted
        return chestArr.push(element);
      }
    });

    // return array to be mapped through
    return chestArr;
  };

  getBackExcercises = (excercise) => {
    const backArr = [];

    excercise.forEach((element) => {
      if (element.body_part === "Back") {
        // push entire element so body part, excercise and sets are all extracted
        return backArr.push(element);
      }
    });

    // return array to be mapped through
    return backArr;
  };

  getLegExcercises = (excercise) => {
    const legArr = [];

    excercise.forEach((element) => {
      if (element.body_part === "Legs") {
        // push entire element so body part, excercise and sets are all extracted
        return legArr.push(element);
      }
    });

    // return array to be mapped through
    return legArr;
  };

  // helper function to render(), handles getting text input component and displaying workout based off that
  renderContent() {
    if (this.props.workoutChoice === "Chest") {
      return (
        <div className="ui container">
          {/* {first call getChestExcercises which returns an array that can be mapped through} */}
          {this.getChestExcercises(excerciseData).map((excercise) => (
            // assign unique key to div
            <div key={excercise.excercise} style={{ marginTop: "10px" }}>
              {/* #TODO styling on these displays */}
              Excercise: {excercise.excercise} || Rep Scheme: {excercise.sets}
            </div>
          ))}
        </div>
      );
    } else if (this.props.workoutChoice === "Back") {
      return (
        <div className="ui container">
          {/* {first call getChestExcercises which returns an array that can be mapped through} */}
          {this.getBackExcercises(excerciseData).map((excercise) => (
            // assign unique key to div
            <div key={excercise.excercise} style={{ marginTop: "10px" }}>
              {/* #TODO styling on these displays */}
              Excercise: {excercise.excercise} || Rep Scheme: {excercise.sets}
            </div>
          ))}
        </div>
      );
    } else if (this.props.workoutChoice === "Legs") {
      return (
        <div className="ui container">
          {/* {first call getChestExcercises which returns an array that can be mapped through} */}
          {this.getLegExcercises(excerciseData).map((excercise) => (
            // assign unique key to div
            <div key={excercise.excercise} style={{ marginTop: "10px" }}>
              {/* #TODO styling on these displays */}
              Excercise: {excercise.excercise} || Rep Scheme: {excercise.sets}
            </div>
          ))}
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default GetWorkout;
