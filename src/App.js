import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Header from "./components/Header";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 13,
    highscore: 0
  };

 //Game Logic
  // gameLogic = () => {
  //   this.state.friends.
  // }

//handleClick needs to grab the of the item clicked, changes the score if the 
  handleClick = (id) => {
    console.log(id);
     let friends = this.state.friends;
     friends = friends.map(friend => {
       if(friend.id === id ){
        friend.clicked = true
       }
      return friend
      })
      //Shuffle Friends
      friends = this.shuffle(friends);
      this.setState({friends})

      //Run GameLogic
      this.gameLogic(friends);

      //  if(id === )
         console.log(friends);
      
  

  };

   //Shuffle the cards after each click 
   shuffle = (a)=> {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
  

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}></Header>
        <Title>Clicky Game</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            image={friend.image}
            click={this.handleClick}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
