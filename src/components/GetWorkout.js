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

  // helper function to render(), handles getting text input component and displaying workout based off that
  renderContent() {
    if (this.props.workoutChoice === "Chest") {
      return (
        <div>
          {/* {first call getChestExcercises which returns an array that can be mapped through} */}
          {this.getChestExcercises(excerciseData).map((excercise) => (
            // assign unique key to div
            <div key={excercise.excercise}>
              {/* #TODO styling on these displays */}
              {excercise.body_part} {excercise.excercise} {excercise.sets}{" "}
              {this.props.benchWeight}
            </div>
          ))}
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default GetWorkout;
