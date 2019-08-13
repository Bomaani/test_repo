function getYearOfBirth(age){
    if (age < 0){
        throw new Error("age can not be a negitive number");
    }
    return 2019 - age;
}

function createGreeting(name, age){
    if (name === undefined || age == undefined){
        throw new error('Not Valid');
    };

    if (typeof age !== 'number'){
        throw new TypeError('Age must be a number value');
    }

    const yob = getYearOfBirth(age);

    return `my name is ${name} and i am ${age} years old.
    I was born in ${yob}`;
}

try {
    const greeting1 = createGreeting('Brock', 28);
    console.log(greeting1);

} catch(e) {
    console.error(e.message);
}

function beyond(num){
    if (num === Number.POSITIVE_INFINITY || num === Number.NEGATIVE_INFINITY) {
        console.log("And Beyond");
    }
    else if (num === 0) {
        console.log("Stayng Home");
    }
    else if (num > 0) {
        console.log("To Infinity");
    }
    else {
        console.log("To negative Energy")
    }
}
beyond(15);
beyond(-5);
beyond(0);
beyond(Number.MAX_VALUE *2);
beyond("five");


function daysOfMonth(month, leapYear) {
    let numOfDays;
  
    switch(month) {
      case 'January':
      case 'March':
      case 'May':
      case 'July':
      case 'August':
      case 'October':
      case 'December':
        numOfDays = 31;
        break;
  
      case 'September':
      case 'April':
      case 'June':
      case 'November':
        numOfDays = 30;
        break;
      
      case 'February':
        numOfDays = leapYear ? 29 : 28;
        break;
  
      default:
        throw new Error('Must provide a valid month.');
    }
  
    return `${month} has ${numOfDays} days.`;
  }


function rockPaperScissors(num) {
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    if (num === randomNumber) {
        return "It's a tie, try again";
    } else if ( num === 1 && randomNumber === 2) {
        return "Paper covers rock -- you lose.";
    } else if (num === 1 && randomNumber === 3) {
        return "Rock breaks scissors -- you win.";
    } else if (num === 2 && randomNumber === 1) {
        return "Paper covers rock -- you win.";
    } else if (num === 2 && randomNumber === 3) {
        return "Scissors cuts paper -- you lose.";
    } else if (num === 3 && randomNumber === 1) {
        return "Rock breaks scissors -- you lose.";
    } else if  (num === 3 && randomNumber === 2) {
        return "Scissors cuts paper -- you win.";
    } else {
        return "You must choose 1 (rock), 2 (paper), or 3 (scissors)";
    }
}
let game = rockPaperScissors(1);
console.log(game);