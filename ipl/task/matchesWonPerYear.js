let matchesWonPerYear=async (matches) =>
{
    let result={};
    let year={};

    for (let ob in matches){
        if (!result.hasOwnProperty(matches[ob]["season"]))
          result[matches[ob]["season"]] = findingYear(matches[ob]["season"]);               // CALLING FUNCTION TO GET THE WINNER
      }

      function findingYear(session)
      {
    for (let obj in matches){
        {
            if (matches[obj]["season"] == session){
          if(!year.hasOwnProperty(matches[obj]["winner"]))                    // COMPARING THE VALUES
            year[matches[obj]["winner"]] = 1;                              
          else
            year[matches[obj]["winner"]] += 1;                                // INCREMENTING THE VALUE
        }
    }
    }
 return year;
}
return result;
}
module.exports=matchesWonPerYear;