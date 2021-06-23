
const fs=require('fs');
const csv=require('./.gitignore/node_modules/csvtojson');

const MATCHES_FILE_PATH ="./data/matches.csv";
const DELIVERIES_FILE_PATH ="./data/deliveries.csv";

const matchesPlayedPerYear=require('/home/kartik/ipl/task/matchesPlayedPerYear.js');
const matchesWonPerYear=require('/home/kartik/ipl/task/matchesWonPerYear.js');
const extraRuns2016=require('/home/kartik/ipl/task/extra2016');
const top10Bowlers=require('/home/kartik/ipl/task/top10bowler');

const OUTPUT_MATCHES_PLAYED_PER_YEAR_PATH ="./result/matchesPlayedPerYear.json";
const OUTPUT_MATCHES_WON_PER_YEAR_PATH ="./result/matchesWonPerYear.json";
const OUTPUT_EXTRA_RUNS_PATH ="./result/extraRuns2016.json";
const OUTPUT_TOP_10_BOWLER_PATH ="./result/top10.json";

const writingOutput=require('./util/writingOutput');

const matchesData= csv()
.fromFile(MATCHES_FILE_PATH)
.then((data)=>data);

const deliveriesData= csv()
.fromFile(DELIVERIES_FILE_PATH)
.then((data)=>data);

let ipl= async () =>                                           
{   let result={};

        const matches=await matchesData;
        const deliveries=await deliveriesData;

        result= await matchesPlayedPerYear(matches);                           // FINDING MATCHES PLAYED PER YEAR
        writingOutput(OUTPUT_MATCHES_PLAYED_PER_YEAR_PATH,result);

        result=await matchesWonPerYear(matches);                              // FINDING MATCHES WON PER YEAR
        writingOutput(OUTPUT_MATCHES_WON_PER_YEAR_PATH,result);

        result=await extraRuns2016(matches,deliveries);                        // FINDING EXTRA RUNS 
        writingOutput(OUTPUT_EXTRA_RUNS_PATH,result);

        result=await top10Bowlers(matches,deliveries);                              // FINDING TOP 10 BOWLERS 
        writingOutput(OUTPUT_TOP_10_BOWLER_PATH,result);

}

ipl();