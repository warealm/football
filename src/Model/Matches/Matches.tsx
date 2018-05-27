import Team from '../Team';
import playMatch from './MatchEngine';


interface ISchedule {
    homeTeams: Team[];
    awayTeams: Team[];
}

interface IMatch {
    winner: string,
    homeGoals: number,
    awayGoals: number,
}

function weeklyGames(schedule: ISchedule) {
    const matches: IMatch[] = [];
    for (let i = 0; i < schedule.homeTeams.length; i++) {
        matches.push(playMatch(schedule.homeTeams[i], schedule.awayTeams[i]));
    }
    return matches;
}

export default weeklyGames;