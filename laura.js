function jediName(firstName, lastName) {
    let part1 = lastName.slice(0,3);
    let part2 = firstName.slice(0,2);
    return `Your Jedi name is ${part1}${part2}`;
}
let name = jediName("Laura", "Elias");
console.log(name);






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




function decodeWord(nextWord) {
   let secretLetter = "";

    switch(nextWord[0]) {
        case "a" : secretLetter = nextWord[1];
          break;
        case "b" : secretLetter = nextWord[2];
          break;
        case 'c' : secretLetter = nextWord[3];
          break;
        case 'd' : secretLetter = nextWord[4];
          break;
        default: secretLetter = (' ');
    }
    //console.log(secretLetter);
    return secretLetter;
}

function decode(string) {
    let stringArray = string.split(" ");
    console.log(stringArray);
    
    let secretMessage = "";

    for (let i=0; i<stringArray.length; i++) {
        let  nextWord = stringArray[i];
        //console.log(nextWord);
        let nextLetter = decodeWord(nextWord);
        secretMessage = secretMessage.concat(nextLetter);
        //console.log(secretMessage);
    }
    console.log(secretMessage);
}

decode("craft block argon meter bells brown croon droop");
decode("downy brown blunt group agate aorta bathe igloo drift death blink chest cat!! homes");





function daysInMonth(month, leap) {
    let totalDays;

    switch(month, leap) {
        case "April": 
        case "June":
        case "September":
        case "November":
            totalDays = 30;
            break;
        case "January":
        case "March":
        case "May":
        case "July": 
        case "August":
        case "October":
        case "December":            
            totalDays = 31;
            break;
        case "February": console.log("February has 28 days");
            totalDays = leap ? 29 : 28;
            break;
        default: console.log("That is not a valid month");
    }
    return `${month} has ${totalDays} days.`;
}

let answer = daysInMonth("June");
console.log(answer);




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