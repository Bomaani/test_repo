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


