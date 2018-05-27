import Player from './Player';
import Team from './Team';

export default class League {
    private playersInTheLeague: Player[] = [];
    private teamsInTheLeague: Team[] = [];


    constructor() {
        this.createInitialPlayers();
        this.createInitialTeams();
        this.updateTeamRatings();
    }

    // getters
    public getPlayersInTheLeague = () => this.playersInTheLeague;
    public getTeamsInTheLeague = () => this.teamsInTheLeague;

    public updateTeamRatings() {
        this.teamsInTheLeague.forEach((team: Team) => {
            team.calculateTeamRating();
        });
    }
    // create players TODO: make the players based on a database
    private createInitialPlayers() {
        for (let i = 0; i < 220; i += 1) {
            this.playersInTheLeague.push(new Player(`akshay${i}`, `bass${i}`));
            this.playersInTheLeague[i].changePlayerTeamID(i % 20);
        }
    }

    // create teams and sort players into teams TODO: teams should be based on a database
    private createInitialTeams() {
        for (let i = 0; i < 20; i += 1) {
            this.teamsInTheLeague.push(new Team(i));
        }
        this.playersInTheLeague.forEach((player: Player) => {
            this.teamsInTheLeague[player.getPlayerTeamID()].addPlayerToTheTeam(player);
        });
    }



};