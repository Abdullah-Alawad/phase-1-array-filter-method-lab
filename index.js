// Code your solution here

const drivers1 = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// function findMatching(drivers, string){
//     const matches = [];
//     for(const name of drivers){
//         if(name.toUpperCase() === string.toUpperCase()){
//             matches.push(name);
//         }
//     }
//     return matches;
// }

function findMatching(drivers, string){
    return drivers.filter((el) => el.toUpperCase() === string.toUpperCase());
}


// function fuzzyMatch(drivers, string){
//     const matches = [];
//     for(const name of drivers){
//         if(name.startsWith(string)){
//             matches.push(name);
//         }
//     }
//     return matches;
// }

function fuzzyMatch(drivers, string){
    return drivers.filter((el) => {return el.startsWith(string)});
}



const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  function matchName(drivers, string){
    return drivers.filter((el) => el.name === string);
}

//const nmaes = drivers.filter(matchName);
//console.log(nmaes);