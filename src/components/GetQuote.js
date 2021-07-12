import React from "react";

class GetQuote extends React.Component {
  state = { quote: "", isLoaded: false };

  /**
   * Loads quote from API as soon as the component is rendered
   */
  componentDidMount() {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        console.log(`${data.content} —${data.author}`);
        this.setState({ quote: data, isLoaded: true });
      });
  }

  /**
   *
   * @returns a div with a quote if the user gets a Ches, Back, or Legs workout
   */
  // #TODO refactor for capitilization
  renderContent() {
    let { quote } = this.state;

    if (this.props.workoutChoice === "Chest") {
      return <div>{JSON.stringify(quote.content)}</div>;
    } else if (this.props.workoutChoice === "Back") {
      return <div>{JSON.stringify(quote.content)}</div>;
    } else if (this.props.workoutChoice === "Legs") {
      return <div>{JSON.stringify(quote.content)}</div>;
    } else {
      return <div></div>;
    }
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default GetQuote;
