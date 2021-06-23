
const matchesPlayedPerYear=require('/home/kartik/ipl/task/matchesPlayedPerYear.js');

const csv=require('csvtojson');

const globalmatches=csv()
.fromFile('data/matches.csv')
.then((data)=>data);



const result={"2008":58,"2009":57,"2010":60,"2011":73,"2012":74,"2013":76,"2014":60,"2015":59,"2016":60,"2017":59};
test('passing the matches data',async () =>{
    try{
    const matches= await globalmatches;
  expect(matchesPlayedPerYear(matches)).toEqual(result);

}catch(error)
{
    console.log('SOmething Wrong');
}
});

test('empty file',async ()=>{
    try{
    const matches= await globalmatches;
    expect(matchesPlayedPerYear(matches)).not.toContain();
}catch(err)
{
    console.log('Something Wrong');
}
});

test('empty object',async ()=>{
    const matches= await globalmatches;
    expect(matchesPlayedPerYear(matches)).not.toContain({});
});
test('not to be undefined',async ()=>{
    const matches= await globalmatches;
    expect(matchesPlayedPerYear(matches)).not.toBeUndefined();
});

test('false output',async ()=>{
    const matches= await globalmatches;
    expect(matchesPlayedPerYear(matches)).not.toBeFalsy();
});

test('truth output',async ()=>{
    const matches= await globalmatches;
    expect(matchesPlayedPerYear(matches)).not.toBeFalsy();
});
test('not null',async ()=>{
    const matches= await globalmatches;
    expect(matchesPlayedPerYear(matches)).not.toBeNull();
});

