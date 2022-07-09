//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here

function createManager(managerName, managerAge, currentTeam, trophiesWon ){
  var array=[]
  array.push(managerName);
  array.push(managerAge);
  array.push(currentTeam);
  array.push(trophiesWon);
  return array;
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here

function createFormation(formation){
  if(formation.length == 0)
    return null;
  obj={};
  obj['defender']=formation[0];
  obj['midfield']=formation[1];
  obj['forward']=formation[2];
  return obj;
} 


// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in _ year

function filterByDebut(year){
  var ans=[]
  for(var i=0;i<players.length;i++){
    if(players[i].debut == year)
      ans.push(players[i])
  }
  return ans;
}


//Progression 4 - Filter players that play at the position ___

function filterByPosition(position){
  var ans=[];
  players.filter(data=>{
    if(data.position == position){
      ans.push(data);
    }
  })
  return ans;
}

//Progression 5 - Filter players that have won __ award

function filterByAward(award){
  var ans=[]
  players.filter(data=>{
    data.awards.filter(awards=>{
      if(awards.name == award){
        ans.push(data);
      }
    })
  })
  return ans;
}

//Progression 6 - Filter players that won __ award __ times

function filterByAwardxTimes(award,nooftimes){
  var ans=[]
  players.filter(data=>{
    let count =0;
    data.awards.filter(awards=>{
      if(awards.name == award){
        count=count+1;
      }
    })
    if(count == nooftimes){
      ans.push(data)
    }
  })
  return ans;
} 



//Progression 7 - Filter players that won __ award and belong to __ country

function filterByAwardxCountry(award,country){
  var ans=[]
  players.filter(data=>{
    if(data.country == country){
      data.awards.filter(details =>{
        if(details.name == award){
          ans.push(data);
        }
      })
    }
  })
  return ans;
}

//Progression 8 - Filter players that won atleast __ awards, belong to __ team and are younger than __

function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age){
  var ans=[];
  players.filter(data=>{
    if(data.team == team && data.age < age && data.awards.length >= noOfAwards){
      ans.push(data);
    }
  })
  return ans;
}



//Progression 9 - Sort players in descending order of their age

function SortByAge(){
  var array=players.sort(function(a,b){ 
    return b.age-a.age
  })
  return array;
}

//Progression 10 - Sort players beloging to ___ team in descending order of awards won

function FilterByTeamxSortByNoOfAwards(team){
  var ans=[]
  players.filter(data=>{
    if(data.team == team)
      ans.push(data)
  })
  var array=ans.sort(function(a,b){
    return b.array.length - a.array.length;
  })
  return array;
}


//Challenge 1 - Sort players that have won ___ award __ times and belong to ____ country in alphabetical order of their names

function SortByNamexAwardxTimes(awardName, noOfTimes, country ){
  var ans=[]
  players.filter(data=>{
    if(data.country == country){
      var count=0;
      data.awards.filter(details=>{
        if(details.name == awardName)
          count=count+1;
      })
      if(count == noOfTimes)
        ans.push(data);
    }
  })
  let array=ans.sort(function(a,b) { return a.name - b.name})
  return array;
}



//Challenge 2 - Sort players that are older than ___ years in alphabetical order

function SortByNamexOlderThan(age){
  var ans=[]
  players.filter(data=>{
    if(data.age > age)
      ans.push(data)
  })
  var array=ans.sort(function (a,b) { return a.name - b.name})
  //Sort the awards won by them in reverse chronological order
  for(var i=0;i<array.length;i++){
    array[i].awards=array[i].awards.sort(function(a,b){return b.name - a.name})
  }
  return array;
}