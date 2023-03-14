//* ACTIVATING STRICT MODE 
/*
'use strict';
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true
if (hasDriversLicense) console.log('I can drive')

// const interface = 'Audio'
// const private = 543
*/


//* FUNCTIONS
/*
function logger() {
    console.log('My name is Jonas')
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProccessor(apples, oranges) {
    const juice = `juice with ${apples} apples and ${oranges} oranges.`
    return juice
}

const appleJuice = fruitProccessor(5, 0)
console.log(appleJuice)

const appleOrangeJuice = fruitProccessor(2, 4)
console.log(appleOrangeJuice)
*/

//* FUNCTION DECLARATIONS VS EXPRESSIONS
/*
//* Function decleration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1996)
console.log(age1)

 //* Function expression
const calcAge2 = function(birthYear) {
    return 2037 - birthYear
}
const age2 = calcAge2(1996)
console.log(age1, age2)
*/


//* ARROW FUNCTIONS
/*
const calcAge3 = birthYear => 2037 - birthYear
const age3 = calcAge3(1996)
console.log(age3)

const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear
    const retirement = 65 - age
        // return retirement
    return `${firstName} retires in ${retirement} years`
}

console.log(yearUntilRetirement(1996, 'Jonas'));
console.log(yearUntilRetirement(1980, 'Bob'));
*/