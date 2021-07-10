import React from "react";

class GetQuote extends React.Component {
  state = { quote: "", isLoaded: false };

  componentDidMount() {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        console.log(`${data.content} —${data.author}`);
        this.setState({ quote: data, isLoaded: true });
      });
  }

  render() {
    let { quote, isLoaded } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return <div>{JSON.stringify(quote.content)}</div>;
    }
  }
}

export default GetQuote;
