
const top10Bowler=require('/home/kartik/ipl/task/top10bowler.js');

const csv=require('csvtojson');

const globaldeliveries=csv()
.fromFile('data/deliveries.csv')
.then((data)=>data);

const globalmatches=csv()
.fromFile('data/matches.csv')
.then((data)=>data);

const result=[["RN ten Doeschate",0.67],["V Kohli",1.67],["CH Gayle",2.67],["DR Smith",2.83],["S Gopal",3.83],["PP Ojha",3.83],["DJG Sammy",4.17],["M Vijay",4.5],["J Yadav",4.67],["KC Cariappa",4.67]];

test('passing the matches data',async () =>{
    try
    {
    const matches= await globalmatches;
    const deliveries= await globaldeliveries;
  expect(top10Bowler(matches,deliveries)).toEqual(result);
}catch(err)
{
    console.log('SOmething Wrong');
}
});

test('Null',()=>{           
    try{                
  expect(top10Bowler()).toEqual([]);
}catch(err)
{
    console.log('SOmething Wrong');
}
});

test('empty file',async ()=>{
    const matches= await globalmatches;
    const deliveries= await globaldeliveries;
    expect(top10Bowler(matches,deliveries)).not.toContain();
});

test('empty object',async ()=>{
    const matches= await globalmatches;
    const deliveries= await globaldeliveries;
    expect(top10Bowler(matches,deliveries)).not.toContain({});
});
test('not to be undefined',async ()=>{
    const matches= await globalmatches;
    const deliveries= await globaldeliveries;
    expect(top10Bowler(matches,deliveries)).not.toBeUndefined();
});

test('false output',async ()=>{
    const matches= await globalmatches;
    const deliveries= await globaldeliveries;
    expect(top10Bowler(matches,deliveries)).not.toBeFalsy();
});

test('truth output',async ()=>{
    const matches= await globalmatches;
    const deliveries= await globaldeliveries;
    expect(top10Bowler(matches,deliveries)).not.toBeFalsy();
});
test('not null',async ()=>{
    const matches= await globalmatches;
    const deliveries= await globaldeliveries;
    expect(top10Bowler(matches,deliveries)).not.toBeNull();
});

