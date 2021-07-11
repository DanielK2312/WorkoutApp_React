import React from "react";
import GetMaxes from "./GetMaxes";
import TextInput from "./TextInput";
import GetQuote from "./GetQuote";
import GetWorkout from "./GetWorkout";

class App extends React.Component {
  state = { workoutChoice: "" };

  getWorkoutValue = (data) => {
    // retrive the user value inputted in the form submit box
    this.setState({ workoutChoice: data.text });
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
