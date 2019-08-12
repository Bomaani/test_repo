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
