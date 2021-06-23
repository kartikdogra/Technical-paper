const fs=require('fs');
function outputAll(file_Path,result){                                       
    const jsonData={
        matchesPlayedPerYear:result
    };
    const jsonString= JSON.stringify(jsonData);
    fs.writeFile(file_Path,jsonString,err => {
        if(err){
            console.log(err);
        }
    });
  }
  module.exports=outputAll;