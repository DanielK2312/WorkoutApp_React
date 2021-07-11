import React from "react";

class GetMaxes extends React.Component {
  state = {
    benchVal: "",
    squatVal: "",
    deadVal: "",
    showBenchVal: false,
    showSquatVal: false,
    showDeadVal: false,
  };

  /**
   *
   * @param {The 1 rep max the user inputs to calculate the top set weight} max
   * @returns Number to be displayed after pressing the get working weight button
   */
  calcTopSet = (max) => {
    return Math.floor(max * 0.8);
  };

  /**
   *
   * @param {Value calculated from calcTopSet method} topSetWeight
   * @returns Number to display the weight to be used in the second set
   */
  backOffSet = (topSetWeight) => {
    return Math.floor(topSetWeight * 0.7);
  };

  // causes a user to be unable to press enter to enter 1rm for Bench
  // #TODO cause some sort of error to user if they press enter
  /**
   * Prevents user from pressing enter to submit form
   * @param {check event} e
   */
  checkKeyDown = (e) => {
    if (e.code === "Enter") {
      e.preventDefault();
    }
  };

  /**
   * Shows benchVal state content after button is pressed
   * @param {set whether or not message be displayed} bool
   */
  _showBenchMessage = (bool) => {
    this.setState({
      showBenchVal: bool,
    });
  };

  _showSquatMessage = (bool) => {
    this.setState({ showSquatVal: bool });
  };

  _showDeadMessage = (bool) => {
    this.setState({ showDeadVal: bool });
  };

  handleBenchChange = (e) => {
    this.setState({ benchVal: parseInt(e.target.value) });
  };

  handleSquatChange = (e) => {
    this.setState({ squatVal: parseInt(e.target.value) });
  };

  handleDeadChange = (e) => {
    this.setState({ deadVal: parseInt(e.target.value) });
  };

  onBenchSubmit = (e) => {
    e.preventDefault();
  };

  onSquatSubmit = (e) => {
    e.preventDefault();
  };

  onDeadSubmit = (e) => {
    e.preventDefault();
  };

  renderContent() {
    return (
      <div className="ui container">
        <form
          onSubmit={this.onBenchSubmit}
          onKeyDown={(e) => this.checkKeyDown(e)}
        >
          <label
            style={{
              border: "2px solid black",
              width: "95px",
              textAlign: "center",
            }}
          >
            Bench 1RM
          </label>
          <input
            className="u-full-width ui input"
            type="text"
            value={this.state.benchVal}
            onChange={this.handleBenchChange}
          ></input>
          <input
            type="submit"
            value="Get Working Weight"
            className="u-full-width"
            style={{ marginTop: "-10px" }}
            onClick={this._showBenchMessage.bind(null, true)}
          ></input>
          {this.state.showBenchVal && (
            <div>
              Bench Press Set 1 Weight : {this.calcTopSet(this.state.benchVal)}{" "}
              for 8-12 reps
              <div>
                Bench Press Set 2 Weight :{" "}
                {this.backOffSet(this.calcTopSet(this.state.benchVal))} for 8-12
                reps
              </div>
            </div>
          )}
        </form>

        <form onSubmit={this.onSquatSubmit}>
          <label
            style={{
              border: "2px solid black",
              width: "95px",
              textAlign: "center",
            }}
          >
            Squat 1RM
          </label>
          <input
            className="u-full-width ui input"
            type="text"
            value={this.state.squatVal}
            onChange={this.handleSquatChange}
          ></input>
          <input
            type="submit"
            value="Get Working Weight"
            className="u-full-width"
            style={{ marginTop: "-10px" }}
            onClick={this._showSquatMessage.bind(null, true)}
          ></input>
          {this.state.showSquatVal && (
            <div>
              Squat Set 1 Weight : {this.calcTopSet(this.state.squatVal)} for
              8-12 reps
              <div>
                Squat Set 2 Weight :{" "}
                {this.backOffSet(this.calcTopSet(this.state.squatVal))} for 8-12
                reps
              </div>
            </div>
          )}
        </form>

        <form onSubmit={this.onDeadSubmit}>
          <label
            style={{
              border: "2px solid black",
              width: "95px",
              textAlign: "center",
            }}
          >
            Deadlift 1RM
          </label>
          <input
            className="u-full-width ui input"
            type="text"
            value={this.state.deadVal}
            onChange={this.handleDeadChange}
          ></input>
          <input
            type="submit"
            value="Get Working Weight"
            className="u-full-width"
            style={{ marginTop: "-10px" }}
            onClick={this._showDeadMessage.bind(null, true)}
          ></input>
          {this.state.showDeadVal && (
            <div>
              Deadlift Set Weight : {this.calcTopSet(this.state.deadVal)} for
              8-12 reps
            </div>
          )}
        </form>
      </div>
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default GetMaxes;
