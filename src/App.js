import React, { Component } from "react";
import "./App.css";
import birds from "./birds.json";
import Wrapper from "./components/Wrapper";
import Navbaritems from "./components/Navbaritems";
import GameTitle from "./components/GameTitle";
import BirdCard from "./components/BirdCard";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    gameTop: 0,
    gameScore: 0,
    gamemessage: "Click a bird image to begin",
    birds: birds,
    selectedBird: []
  };

  processSelected = bird => {
    console.log("Selected is ");
    console.log(bird);

    const checkselectedbird = this.state.selectedBird.find(
      b => b.birdname === bird
    );

    if (checkselectedbird === undefined) {
      const selectBird = this.state.selectedBird.concat({ birdname: bird });
      this.setState({
        gameScore: this.state.gameScore + 1,
        gamemessage: "Correct selection",
        selectedBird: selectBird
      });
    } else {
      console.log("Incorrect selection");
      console.log(this.state.selectedBird);
      this.setState({
        gameScore: 0,
        gameTop:
          this.state.gameScore > this.state.gameTop
            ? this.state.gameScore
            : this.state.gameTop,
        gamemessage: "In Correct selection",
        selectedBird: []
      });
    }
    this.rearrangeGame(this.state.birds);
  };

  rearrangeGame = b => {
    for (let i = b.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [b[i], b[j]] = [b[j], b[i]];
    }
  };

  render() {
    return (
      <Wrapper>
        <Wrapper>
          <Navbaritems
            gameTop={this.state.gameTop}
            gameScore={this.state.gameScore}
            gamemessage={this.state.gamemessage}
          />
          <GameTitle />
          {this.state.birds.map(bird => (
            <BirdCard
              birdname={bird.birdname}
              image={bird.image}
              processSelected={this.processSelected}
            />
          ))}
        </Wrapper>
        <Wrapper>
          <Footer />
        </Wrapper>
      </Wrapper>
    );
  }
}

export default App;
