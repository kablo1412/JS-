const team = {
  _players: [
    {firstName:'Karlo', lastName:'Pavlenic', age: 24},
    {firstName:'Leo', lastName: 'Messi', age: 31},
    {fistName:'Cristiano', lastName: 'Ronaldo', age: 34}
  ],
  _games: [
    {opponent: 'Libertas', teamPoints: 3, opponentPoints: 0},
    {opponent: 'Real Madrid', teamPoints: 2, opponentPoints: 2},
    {opponent: 'Barcelona', teamPoints: 3, opponentPoints: 4},
  ],
  
  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

addPlayer(firstName, lastName, age)  {
  let player = {
    firstName: firstName,
    lastName: lastName,
    age: age
  };
  this.players.push(player);
},

addGame(opponent, teamPoints, opponentPoints) {
  let game = {
    opponent: opponent,
    teamPoints: teamPoints,
    opponentPoints: opponentPoints
  };
  this.games.push(game);
}




};
team.addPlayer('Steph','Curry',28);
team.addPlayer('Lisa','Leslie',44);
team.addPlayer('Bugs','Bunny',76);
console.log(team.players);
team.addGame('Titans',100, 98);
console.log(team.games);

