let extraRuns2016= async (matches,deliveries)=>
{
    let runs={};
    let match_id=[];
    let iterator=0;

    for(let ob in matches)
    {
      if(matches[ob]["season"]==2016)
      {
          match_id[iterator++]=matches[ob]["id"];
      }
    }
    
    for (let ob in deliveries){
        if(match_id.includes(deliveries[ob]["match_id"])){
          if (!runs.hasOwnProperty(deliveries[ob]["bowling_team"]))                                  // COMPARING AND CALCULATING THE PROPERTIES
          {  
          runs[deliveries[ob]["bowling_team"]] = parseInt(deliveries[ob]["extra_runs"]);
            
        }
          else
          {
            runs[deliveries[ob]["bowling_team"]] += parseInt(deliveries[ob]["extra_runs"]);
        }
      }
    }
    return runs;
}
module.exports=extraRuns2016;