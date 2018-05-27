// function for a match, input is 2 teams and output is the winner and score
import Team from '../Team';

function playMatch(homeTeam: Team, awayTeam: Team) {
    let winner: string = '';
    let homeGoals: number = 0;
    let awayGoals: number = 0;

    homeGoals = Math.round(Math.random() * 10 * homeTeam.getTeamRating() / 100);
    awayGoals = Math.round(Math.random() * 10 * awayTeam.getTeamRating() / 100);

    if (homeGoals > awayGoals) {
        winner = homeTeam.getTeamID().toString();
    } else if (homeGoals < awayGoals) {
        winner = awayTeam.getTeamID().toString();
    } else {
        winner = 'draw';
    }

    return {
        awayGoals,
        homeGoals,
        winner,
    };
}

export default playMatch;
