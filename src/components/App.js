import React from "react";
import GetMaxes from "./GetMaxes";
import TextInput from "./TextInput";
import GetQuote from "./GetQuote";
import GetWorkout from "./GetWorkout";

class App extends React.Component {
  state = { workoutChoice: "", benchWeight: 0, squatMax: 0, deadMax: 0 };

  // calculate the top set of 8-12 reps based off what the user inputs
  calculateTopSet = (oneRM) => {
    return Math.floor(oneRM * 0.8);
  };

  // calculates 70% of the top set weight for the second back off set
  calculateBackOffSet = (calculateTopSetValue) => {
    return Math.floor(calculateTopSetValue * 0.7);
  };

  // get bench 1rm input form child component to set to this parent state
  getBenchValue = (data) => {
    let x = data.benchVal;
    x = this.calculateTopSet(x);
    this.setState({ benchWeight: x }, () => {
      console.log(this.state);
    });
  };

  getSquatValue = (data) => {
    console.log(data.squatVal);
  };

  getDeadValue = (data) => {
    console.log(data.deadVal);
  };

  getWorkoutValue = (data) => {
    // retrive the user value inputted in the form submit box
    this.setState({ workoutChoice: data.text }, () => {
      console.log(this.state.workoutChoice);
    });
  };

  // clears out text field
  // #TODO do same to 1RM inputs once the state is actually set on those
  // may not work cause callbacks...
  handleClearingChange() {
    let empty = "";
    this.setState({ workoutChoice: empty }, console.log("complete"));
    // this.setState({ benchWeight: empty });
  }

  render() {
    return (
      <div className="container">
        <label style={{ textAlign: "center" }}>
          Input 1 Rep Maxes Below...
        </label>

        <GetMaxes
          benchChange={this.getBenchValue}
          // squatChange={this.getSquatValue}
          // deadChange={this.getDeadValue}
        />

        <label style={{ textAlign: "center" }}>
          Input the workout you want below...
        </label>

        <div>
          <TextInput onChange={this.getWorkoutValue} />
          <button
            className="ui container"
            onClick={this.handleClearingChange}
            style={{ marginTop: "-35px" }}
          >
            Reset
          </button>
        </div>

        <GetWorkout
          workoutChoice={this.state.workoutChoice}
          // Export top weight to child component
          benchWeight={this.state.benchWeight}
        />
      </div>
    );
  }
}

export default App;
