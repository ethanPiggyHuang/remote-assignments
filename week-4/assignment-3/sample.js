import './App.css';
import React, { useState, useEffect }  from 'react';

const Header = (props) => {
  return (
    <header>
      <h1>{ props.title }</h1>
      <span className="stats">Players: { props.totalPlayers }</span>
    </header>
  );
}

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={ () => props.removePlayer(props.id) }>✖</button> 
        { props.name }
      </span>
      <Counter score={props.score} />
    </div>
  );
}

const Counter = () => {
  const [ score, setScore ] = useState(0);
  
  useEffect(() => {
    console.log('useEffect called!');   
  },[ score ]);

  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={() => setScore(prevScore => prevScore-1)}> - </button>
      <span className="counter-score"> { score } </span>
      <button className="counter-action increment" onClick={() => setScore(prevScore => prevScore+1)}> + </button>
    </div>
  );
}

// class Counter extends React.Component{
  
//   state = {
//     score: 0
//   };

//   incrementScore = () => {
//     this.setState( prevState => ({
//       score: prevState.score + 1
//     }));    
//   }

//   decrementScore = () => {
//     if(this.state.score > 0){
//       this.setState( prevState => ({
//         score: this.state.score - 1
//       })); 
//     } 
//   }

//   render() {
//     return (
//       <div className="counter">
//         <button className="counter-action decrement" onClick={ this.decrementScore }> - </button>
//         <span className="counter-score"> { this.state.score } </span>
//         <button className="counter-action increment" onClick={ this.incrementScore }> + </button>
//       </div>
//     );
//   }
// }

class App extends React.Component {
  
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ]
  };

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter( p => p.id !== id)
      };
    });
  }

  render () {
    return(
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          totalPlayers={this.state.players.length}
        />

        {/* start of Player list */}
        {this.state.players.map( player =>
          <Player 
            name={player.name}
            id={player.id}
            key={player.id.toString()}
            removePlayer={this.handleRemovePlayer}
            score={player.score}
          />  
        )}

      </div>
    );
  }
}

export default App;
