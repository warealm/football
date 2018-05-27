import * as React from 'react';
import './App.css';
// import Player from './Model//Player';
// import Team from './Model//Team';
import League from './Model/League';
import playMatch from './Model/Matches/MatchEngine';
import Schedule from './Model/Matches/Schedule';

const teams: number[] = [];
for (let i = 0; i < 20; i++) {
  teams.push(i);
}

interface IMatch {
  awayGoals: number,
  homeGoals: number,
  winner: string,
}

class App extends React.Component {

  private league = new League();
  private teams = this.league.getTeamsInTheLeague();

  private schedule = new Schedule(teams);
  private tids = this.schedule.createAnnualSchedule();






  public render() {
    const matches: number[][] = [];
    const result: IMatch[] = [];


    // this.tids.forEach(match => {
    //   matches.push(match[0], match[1]);
    // });
    matches.push(...this.tids[0])
    matches.forEach(match => {
      result.push(playMatch(this.teams[match[0]], this.teams[match[1]]));
    });

    const listItems = matches.map(match => {
      // <li key={matches.indexOf(match)}>{`Result: ${match.winner}, Home Goals: ${match.homeGoals}, 
      // Away Goals: ${match.awayGoals}`}</li>
      const i = matches.indexOf(match);
      return <li key={i}>{`Home Team: ${match[0]}, Away Team: ${match[1]}, Result: ${result[i].winner}, Home Goals: ${result[i].homeGoals}, Away Goals: ${result[i].awayGoals}`}</li>;
    });

    return <div><h1>First week fixtures</h1><ul>{listItems}</ul></div>;
  }
}

export default App;
