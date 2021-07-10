import React from "react";

class TextInput extends React.Component {
  state = { text: "" };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  onSubmitValue = (e) => {
    e.preventDefault();

    // pass the state to the onChange prop
    this.props.onChange(this.state);
  };

  render() {
    return (
      <div className="ui container">
        <form onSubmit={this.onSubmitValue}>
          <input
            className="u-full-width ui input"
            type="text"
            placeholder="Search Workout..."
            value={this.state.text}
            onChange={this.handleChange}
          ></input>
        </form>
      </div>
    );
  }
}

export default TextInput;
