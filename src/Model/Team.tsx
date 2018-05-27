import Player from './Player';

export default class Team {
    // variables
    // private teamName = 'blank';
    private playersInTheTeam: Player[] = new Array();
    private teamRating = 0;
    private leaguePoints = 0;

    constructor(private teamID: number) {
    }

    // getters
    public getTeamID = () => this.teamID;
    public getPlayersInTheTeam = () => this.playersInTheTeam;
    public getTeamRating = () => this.teamRating;

    // setters and calculators
    public addPlayerToTheTeam = (player: Player) => this.playersInTheTeam.push(player);
    // adds every players rating then divides by number of players in the team
    public calculateTeamRating = () => {
        this.teamRating = 0;
        this.playersInTheTeam.forEach((player: Player) => {
            this.teamRating += player.getPlayerRating();
        });
        this.teamRating /= this.playersInTheTeam.length;
        this.teamRating = Math.round(this.teamRating);
    };
    public increaseLeaguePointsBy = (points: number) => (this.leaguePoints += points);

}

