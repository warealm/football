// import Player from '../Model/Player';
// import Team from '../Model/Team';

// export default class League {
//     private playersInTheLeague: Player[] = [];
//     private teamsInTheLeague: Team[] = [];



    // // create players TODO: make the players based on a database
    // public createInitialPlayers() {
    //     for (let i = 0; i < 220; i += 1) {
    //         this.playersInTheLeague.push(new Player(`akshay${i}`, `bass${i}`));
    //         this.playersInTheLeague[i].changePlayerTeamID(i % 20);
    //     }
    // }

//     // create teams and sort players into teams TODO: teams should be based on a database
//     public createInitialTeams() {
//         for (let i = 0; i < 20; i += 1) {
//             this.teamsInTheLeague.push(new Team(i));
//         }
//         this.playersInTheLeague.forEach((player: Player) => {
//             this.teamsInTheLeague[player.getPlayerTeamID()].addPlayerToTheTeam(player);
//         });
//     }

//     public updateTeamRatings() {
//         this.teamsInTheLeague.forEach((team: Team) => {
//             team.calculateTeamRating();
//         });
//     }

// };
