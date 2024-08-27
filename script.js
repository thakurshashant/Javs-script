/**********************  TYPES CONVERSIONS  *************/
/*
const inputYear = '1991';

console.log(Number(inputYear), inputYear);    // here this built-in fucntion number is used  to convert  our string into number.

// here still the value of inputYear is '1991' instead of 1991

console.log(Number(inputYear) + 18);    // here 18 doesnt gets added to the 1991 as it is an string therefore it just gets 199118 so we have to do something to correct this . this is done by type conversion and type coercision

console.log(Number('Jonas'));    // when we try to convert a string that is not a number into number it displays (NaN: not a number)

console.log(typeof NaN);     // NaN is a number but its invalid number

console.log(String(23), 23);      // the output in white indicate that the value is string

////////// JAVA SCRPIT CAN ONLY CONVERT INO THREE DATA TYPES
////////// 1. TO A NUMBER 2. TO A STRING 3. TO A BOOLEAN   //////


/*******************  TYPE COERCISION    *************** /

console.log('I am ' + 23 + 'years old');   // here the 23 gets converted intno the strings by type coercision automatically
console.log('I am ' + '23' + 'years old');
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);    // negative sign and the positive sign works differently
console.log("23" * 2);

let n = '1' + 1;   // 1+1=2   '1'+1=11 as string just adds
n = n - 1;     // negative cant do anything other than substracting
console.log(n);

//'10' -'4' -'3' -2 +'5' =15
*/

//  5 falsy values :'', undefined , null , not a number: : whenevre you types or write these values it automatically gets converted to false
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('jonas'));
console.log(Boolean({}));  // truthy values

//conversion to boolean is always explicit not implpicit or type coercision

const money = 0;
// if else statements are boolean statements so theyll check boolean values

if (money) {
    console.log("Don't spend it all");
}
else {
    console.log("you should get a job");
}

let height;
if (height) {        // height isnt assigned a value its undefined
    console.log("YAY ! height is defined");
} else {
    console.log("height is UNDEFINED");
}
*/
/*
const age = '18';
if (age === 18) {
    console.log("person is adult now");
}
if (age == 18) {
    console.log('PERSON I SADULT NOW');
}

//(( ===  ) TRIPLE EQUALS IS CALLED AS THE STRICT EQUALITY OPERATORS
//((==)) DOUBLE EQUALS IS CALLED AS  THE LOOSE EQUALITY OPERATORS  AND THESE PERFORMS TYPE COERSION WHEREAS THE ===  DOESNT PERFROM SO (THAT MEANS == CONVERTS THE VALUE AND THEN EQUATES  AS '18' =18  (TRUE) BECAUSE IT ACTS AS TYPE COERSION AS IT CONVERTS '18' STRING INTO THE NUMBER 18 AND IT BECOMES TRUE )


//OR YOU CAN SAY THAT THE DOUBLE EQUALS ONLY CHECK THE VALUES STORED IN VARAIBLES WHERE AS THE === EQUALS TO CHECKS THE TYPE OF VALUES STOERED AS IN IT CHECKS WHETHER VALUE IS STRING OR NUMBER

//'18' === 18  - DISPLAYS FALSE

// WHEN YOU WANT TO EXTRACT VALUES USE PROMT FUNCTIONS  //

const favourite = Number(prompt("what's your fav number ?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {   // '23'== 23 but '23'=== not=23
    console.log('cool 23 is an amazing number');
}
else if (favourite === 7) {
    console.log('7 is alos an cool number');

} else if (favourite === 9) {
    console.log('9 is alos an cool number');
}
else {
    console.log("number is not 23 or 7");
}

/////////////////DIFEREFNT OPERATOR/////////////

if (favourite !== 23) {
    console.log('why not 23?');   /// strictly not equal to 23
}

*/


/*
const hasDriversLicense = true;  //A
const hasGoodVision = true;     //B
console.log(hasDriversLicense && hasGoodVision); //&& -AND
console.log(hasDriversLicense || hasGoodVision);  //|| - or operator
console.log(!hasDriversLicense);



/*if (hasDriversLicense && hasGoodVision) {
    console.log('sarah is able to drive!');

} else {
    console.log('someone else should drive ...');
}


const isTired = false;  //c
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('sarah is able to drive!');

} else {
    console.log('someone else should drive ...');
}

*/


////////////////// CODING CHALLENGE//////////////

/*
const avgDolphins = (97 + 112 + 81) / 3;
const avgKoalas = (109 + 95 + 86) / 3;

console.log(avgDolphins, avgKoalas);

if (avgDolphins > avgKoalas && avgDolphins >= 100) {
    console.log("winner of the competiton is dolphins");
} else if (avgKoalas > avgDolphins && avgKoalas >= 100) {
    console.log("winner is koalas");
} else if (avgKoalas === avgDolphins && avgDolphins >= 100 && avgKoalas >= 100) {
    console.log("winner of the competiton is none it's a draw");
} else {
    console.log("no one wins the trophy");
}



const day = 'monday';

switch (day) {
    case 'monday':
        console.log("plan my core structure");
        console.log('go to codinng meet up');
        break;
    case 'tuesday':
        console.log("prepare theory videos");
        break;
    case 'wednesday':
    case 'thursday':
        console.log("write code examples");
        break;
    case 'friday':
        console.log("redord videos");
        break;
    case 'saturday':
    case 'sunday':
        console.log("enjoy your weekend");
        break;
    default:
        console.log("not a valid day");
}
*/

