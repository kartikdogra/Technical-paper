let matchesPlayedPerYear=async (matches) =>
{
    let result={};
    
    for(let match of matches)
    {
        let season =match.season;
        if(result[season]){
            result[season] +=1;
        }
        else{
            result[season] =1;
        }
    }
    return result;
}

module.exports = matchesPlayedPerYear;