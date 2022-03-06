function scuberGreetingForFeet(ride){
  // Write your code here!  
  if(ride<= 400){
    return('This one is on me!');
  }else if (ride > 2500){
    return("No can do.")
    
  }else if(ride > 2000){
    return('I will gladly take your thirty bucks.')

  }
  
}

function ternaryCheckCity(city){
  // Write your code here!
 let NYC = ternaryCheckCity
return city === `NYC`? `Ok, sounds good.` : `No go.`

}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case 'generous':
      return "Thank you so much.";
      break;
    case 'not as generous': 
      return "Thank you.";
      break;
    default:
      return "Bye."
      break;

  }
}


// function addFive(someNumber){
//   let result
//   if (someNumber > 0){
//     result = someNumber + 5;
//   }
//   return result
// }

// console.log(addFive(10));
 

// let x = 5; 

// if (x === 5){
//   console.log(`${x} is equal to 5!`);
// } else {
//   console.log(`${x} is NOT equal to 5!`);
// }

// let y = 10
// {y === 5 ? console.log("Equal to five!") : console.log("Not equal to five!")}

const a = 2;
let b = 4;

console.log(`Success! ${a} + ${a} = ${b}`);

let time = 15;
{time <= 12 ? console.log(`${time} is in the AM`): console.log(`${time} is in the PM`)}

console.log(time <= 12 ? `${time} is in the AM` : `${time} is in the PM`);

{time <= 12?
  console.log(`${time} is in the AM`)

  :
  console.log(`${time} is in the PM`)

}