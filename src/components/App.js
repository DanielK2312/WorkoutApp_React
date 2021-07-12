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

  /**
   * Refresh page to get a new workout
   */
  refreshPage = () => {
    window.location.reload();
  };

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
            onClick={this.refreshPage}
            style={{ marginTop: "-35px" }}
          >
            Reset
          </button>
        </div>

        <GetQuote workoutChoice={this.state.workoutChoice} />

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
