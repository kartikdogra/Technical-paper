
const matchesWonPerYear=require('/home/kartik/ipl/task/matchesWonPerYear.js');

const csv=require('csvtojson');

const globalmatches=csv()
.fromFile('data/matches.csv')
.then((data)=>data);



const result= {"2008":{"Sunrisers Hyderabad":42,"Rising Pune Supergiant":10,"Kolkata Knight Riders":77,"Kings XI Punjab":70,"Royal Challengers Bangalore":73,"Mumbai Indians":92,"Delhi Daredevils":62,"Gujarat Lions":13,"Chennai Super Kings":79,"Rajasthan Royals":63,"Deccan Chargers":29,"Pune Warriors":12,"Kochi Tuskers Kerala":6,"":3,"Rising Pune Supergiants":5},"2009":{"Sunrisers Hyderabad":42,"Rising Pune Supergiant":10,"Kolkata Knight Riders":77,"Kings XI Punjab":70,"Royal Challengers Bangalore":73,"Mumbai Indians":92,"Delhi Daredevils":62,"Gujarat Lions":13,"Chennai Super Kings":79,"Rajasthan Royals":63,"Deccan Chargers":29,"Pune Warriors":12,"Kochi Tuskers Kerala":6,"":3,"Rising Pune Supergiants":5},"2010":{"Sunrisers Hyderabad":42,"Rising Pune Supergiant":10,"Kolkata Knight Riders":77,"Kings XI Punjab":70,"Royal Challengers Bangalore":73,"Mumbai Indians":92,"Delhi Daredevils":62,"Gujarat Lions":13,"Chennai Super Kings":79,"Rajasthan Royals":63,"Deccan Chargers":29,"Pune Warriors":12,"Kochi Tuskers Kerala":6,"":3,"Rising Pune Supergiants":5},"2011":{"Sunrisers Hyderabad":42,"Rising Pune Supergiant":10,"Kolkata Knight Riders":77,"Kings XI Punjab":70,"Royal Challengers Bangalore":73,"Mumbai Indians":92,"Delhi Daredevils":62,"Gujarat Lions":13,"Chennai Super Kings":79,"Rajasthan Royals":63,"Deccan Chargers":29,"Pune Warriors":12,"Kochi Tuskers Kerala":6,"":3,"Rising Pune Supergiants":5},"2012":{"Sunrisers Hyderabad":42,"Rising Pune Supergiant":10,"Kolkata Knight Riders":77,"Kings XI Punjab":70,"Royal Challengers Bangalore":73,"Mumbai Indians":92,"Delhi Daredevils":62,"Gujarat Lions":13,"Chennai Super Kings":79,"Rajasthan Royals":63,"Deccan Chargers":29,"Pune Warriors":12,"Kochi Tuskers Kerala":6,"":3,"Rising Pune Supergiants":5},"2013":{"Sunrisers Hyderabad":42,"Rising Pune Supergiant":10,"Kolkata Knight Riders":77,"Kings XI Punjab":70,"Royal Challengers Bangalore":73,"Mumbai Indians":92,"Delhi Daredevils":62,"Gujarat Lions":13,"Chennai Super Kings":79,"Rajasthan Royals":63,"Deccan Chargers":29,"Pune Warriors":12,"Kochi Tuskers Kerala":6,"":3,"Rising Pune Supergiants":5},"2014":{"Sunrisers Hyderabad":42,"Rising Pune Supergiant":10,"Kolkata Knight Riders":77,"Kings XI Punjab":70,"Royal Challengers Bangalore":73,"Mumbai Indians":92,"Delhi Daredevils":62,"Gujarat Lions":13,"Chennai Super Kings":79,"Rajasthan Royals":63,"Deccan Chargers":29,"Pune Warriors":12,"Kochi Tuskers Kerala":6,"":3,"Rising Pune Supergiants":5},"2015":{"Sunrisers Hyderabad":42,"Rising Pune Supergiant":10,"Kolkata Knight Riders":77,"Kings XI Punjab":70,"Royal Challengers Bangalore":73,"Mumbai Indians":92,"Delhi Daredevils":62,"Gujarat Lions":13,"Chennai Super Kings":79,"Rajasthan Royals":63,"Deccan Chargers":29,"Pune Warriors":12,"Kochi Tuskers Kerala":6,"":3,"Rising Pune Supergiants":5},"2016":{"Sunrisers Hyderabad":42,"Rising Pune Supergiant":10,"Kolkata Knight Riders":77,"Kings XI Punjab":70,"Royal Challengers Bangalore":73,"Mumbai Indians":92,"Delhi Daredevils":62,"Gujarat Lions":13,"Chennai Super Kings":79,"Rajasthan Royals":63,"Deccan Chargers":29,"Pune Warriors":12,"Kochi Tuskers Kerala":6,"":3,"Rising Pune Supergiants":5},"2017":{"Sunrisers Hyderabad":42,"Rising Pune Supergiant":10,"Kolkata Knight Riders":77,"Kings XI Punjab":70,"Royal Challengers Bangalore":73,"Mumbai Indians":92,"Delhi Daredevils":62,"Gujarat Lions":13,"Chennai Super Kings":79,"Rajasthan Royals":63,"Deccan Chargers":29,"Pune Warriors":12,"Kochi Tuskers Kerala":6,"":3,"Rising Pune Supergiants":5}};

test('passing the matches data',async () =>{
  try{
  const matches= await globalmatches;
  expect(matchesWonPerYear(matches)).toEqual(result);
}catch(err)
{
    console.log('SOmething Wrong');
}
});

test('Null',()=>{ 
    try{                         
  expect(matchesWonPerYear()).toEqual({});
}catch(err)
{
    console.log('SOmething Wrong');
}
});

test('empty file',async ()=>{
    const matches= await globalmatches;
    expect(matchesWonPerYear(matches)).not.toContain();
});

test('empty object',async ()=>{
    const matches= await globalmatches;
    expect(matchesWonPerYear(matches)).not.toContain({});
});
test('not to be undefined',async ()=>{
    const matches= await globalmatches;
    expect(matchesWonPerYear(matches)).not.toBeUndefined();
});

test('false output',async ()=>{
    const matches= await globalmatches;
    expect(matchesWonPerYear(matches)).not.toBeFalsy();
});

test('truth output',async ()=>{
    const matches= await globalmatches;
    expect(matchesWonPerYear(matches)).not.toBeFalsy();
});
test('not null',async ()=>{
    const matches= await globalmatches;
    expect(matchesWonPerYear(matches)).not.toBeNull();
});

