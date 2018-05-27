export default class Player {

    private playerRating = Math.round(Math.random() * 50 + 50); // overall rating for now
    private playerTeamID = 100; // 100 can be the free agents

    constructor(private firstName: string, private lastName: string) {
    }

    // getters
    public getPlayerName = () => `${this.firstName} ${this.lastName}`;
    public getPlayerRating = () => this.playerRating;
    public getPlayerTeamID = () => this.playerTeamID;

    // setters and calculators
    public changePlayerTeamID = (newTeam: number) => (this.playerTeamID = newTeam);
    public increasePlayerRatingBy = (increase: number) =>
        this.playerRating + increase > 100 ? (this.playerRating = 100) : (this.playerRating += increase);

}


