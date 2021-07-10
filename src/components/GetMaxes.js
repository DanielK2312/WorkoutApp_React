import React from "react";

class GetMaxes extends React.Component {
  state = { benchVal: "", squatVal: "", deadVal: "" };

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
    this.props.benchChange(this.state);
  };

  onSquatSubmit = (e) => {
    e.preventDefault();
    this.props.squatChange(this.state);
  };

  onDeadSubmit = (e) => {
    e.preventDefault();
    this.props.deadChange(this.state);
  };

  render() {
    return (
      <div className="ui container">
        <form onSubmit={this.onBenchSubmit}>
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
        </form>
      </div>
    );
  }
}

export default GetMaxes;
