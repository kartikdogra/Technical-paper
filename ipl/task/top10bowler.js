let top10Bowlers=async (matches,deliveries) =>
{   
    let result={};
    let match_id=[];
    let iterator=0;
    let top10Bowler={};

    for(let ob in matches)                                                                 // getting id of year 2015
    {
      if(matches[ob]["season"]==2015)
      {
          match_id[iterator++]=matches[ob]["id"];
      }
    }
    for(let ob in deliveries){                                                          // geting bowler economy
        if(match_id.includes(deliveries[ob]["match_id"])){                             
          if (!result.hasOwnProperty(deliveries[ob]["bowler"]))
          {                                
            result[deliveries[ob]["bowler"]] = parseInt(deliveries[ob]["total_runs"]/6);
          }                                                                                      
          else
            result[deliveries[ob]["bowler"]] += parseInt(deliveries[ob]["total_runs"])/6;
        }
      }

      for (let key in result){
        result[key] = Math.round((result[key])*100)/100;                                     // ROUNDING OFF THE VALUES UPTO TWO DECIMAL
      }

      top10Bowler = Object.keys(result).map(function(key) {                                  // SORTING AND GETTING TOP 10
        return [key, result[key]];
      }).sort(function(a, b){ return (a[1] - b[1]); }).slice(0,10);
      
return top10Bowler;
}
module.exports=top10Bowlers;