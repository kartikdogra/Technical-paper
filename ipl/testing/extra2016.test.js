
const extraRuns2016=require('/home/kartik/ipl/task/extra2016.js');
const csv=require('csvtojson');

const deliveriesData=csv()
.fromFile('data/deliveries.csv')
.then((data)=>data);

const matchesData=csv()
.fromFile('data/matches.csv')
.then((data)=>data);


const result={"Rising Pune Supergiants":108,"Mumbai Indians":102,"Kolkata Knight Riders":122,"Delhi Daredevils":106,"Gujarat Lions":98,"Kings XI Punjab":100,"Sunrisers Hyderabad":107,"Royal Challengers Bangalore":156};

test('passing the matches data',async () =>{

    try{                                                                         // handling promise
    const matches= await matchesData;
    const deliveries= await deliveriesData;
  expect(extraRuns2016(matches,deliveries)).toEqual(result);
}
catch(err)
{
    console.log('Something wrong');
}
});

test('Null',async ()=>{ 
    try{
    const matches= await matchesData;
    const deliveries= await deliveriesData;                           
  expect(extraRuns2016()).toEqual({});
}catch(err)
{
    console.log('Something wrong');
}

});

test('empty file',async ()=>{
    const matches= await matchesData;
    const deliveries= await deliveriesData;
    expect(extraRuns2016(matches,deliveries)).not.toContain();
});

test('empty object',async ()=>{
    const matches= await matchesData;
    const deliveries= await deliveriesData;
    expect(extraRuns2016(matches,deliveries)).not.toContain({});
});
test('not to be undefined', async ()=>{
    const matches= await matchesData;
    const deliveries= await deliveriesData;
    expect(extraRuns2016(matches,deliveries)).not.toBeUndefined();
});

test('false output',async ()=>{
    const matches= await matchesData;
    const deliveries= await deliveriesData;
    expect(extraRuns2016(matches,deliveries)).not.toBeFalsy();
});

test('truth output',async ()=>{
    const matches= await matchesData;
    const deliveries= await deliveriesData;
    expect(extraRuns2016(matches,deliveries)).not.toBeFalsy();
});
test('not null',async ()=>{
    const matches= await matchesData;
    const deliveries= await deliveriesData;
    expect(extraRuns2016(matches,deliveries)).not.toBeNull();
});

