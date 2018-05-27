import { random } from '../../Util';

import * as _ from "lodash";
// import Team from '../Team';


// This will create a schedule one year at a time, it will only output the teamIDs and not the teams
export default class Schedule {


    // private homeTeamsThisWeek: Team[] = [];
    // private awayTeamsThisWeek: Team[] = [];

    constructor(private teamID: number[], currentYear?: number, currentWeek?: number, ) {
    }

    // create a yearly schedule
    // create a double index array which says the total number of games in the year, schedule[1,2] will be a game between a home team[1] and a away team [2], so it will have around 760 games for a 20 team (38 games per team), this array obv cant have any duplicates
    public createAnnualGames = () => {
        // const teams = [1, 2, 3, 4]
        const teams = this.teamID;
        const allGames: number[][] = []; // allGames[0][0] will give you the first match, and the home team, and allGames[0][1] will give you the away team

        // Collect info needed for scheduling
        const homeGames = [];
        const awayGames = [];
        for (let i = 0; i < teams.length; i++) {
            homeGames[i] = 0;
            awayGames[i] = 0;
        }
        for (let i = 0; i < teams.length; i++) {
            for (let j = 0; j < teams.length; j++) {
                if (teams[i] !== teams[j]) {
                    const currentGame = [teams[i], teams[j]];
                    // teams can't play against another
                    if (teams[i] !== teams[j]) {
                        allGames.push(currentGame);
                        homeGames[i] += 1;
                        awayGames[j] += 1;
                    }
                }
            }
        }
        random.shuffle(allGames);
        return allGames;
    }

    public createAnnualSchedule() {
        const teams = this.teamID;
        const allGames = this.createAnnualGames();
        const weeklySchedule: number[][][] = [] // weeklySchedule[0] should give you an array with the amount of games in the first week
        const gamesInTheWeek: number[][] = [] // the teams that have played in a certain week, just used as a counter
        const tempAllGames = allGames.slice(0);
        while (tempAllGames.length > 0) {
            // we now have every game
            const currentGame = tempAllGames[0];
            // cycle through every week
            for (let week = 0; week <= (teams.length - 1) * 2; week++) {
                // if week doesnt exist, add game to week straight away
                if (!gamesInTheWeek[week]) {
                    gamesInTheWeek[week] = [];
                    gamesInTheWeek[week].push(currentGame[0]);
                    gamesInTheWeek[week].push(currentGame[1]);
                    weeklySchedule[week] = [];
                    weeklySchedule[week].push(currentGame);
                    break;
                } else if (
                    // has the team played that week? if not then add game to week, 
                    // indexOf -1 just means that element was not found in the games in the week array
                    (gamesInTheWeek[week].indexOf(currentGame[0]) === -1) &&
                    (gamesInTheWeek[week].indexOf(currentGame[1]) === -1)
                ) {
                    gamesInTheWeek[week].push(currentGame[0]);
                    gamesInTheWeek[week].push(currentGame[1]);
                    weeklySchedule[week].push(currentGame);
                    break;
                }
            }
            tempAllGames.splice(0, 1);
        }

        random.shuffle(weeklySchedule);
        _.flatten(allGames);
        // flatten will return each game but sorted by week instead, otherwise we'll have a 3 dimentional array
        // return _.flatten(weeklySchedule);
        return weeklySchedule;
    }
}