// If Else and Switch Case in JavaScript
console.log("If Else and Switch Case in JavaScript");

const age = 28;
const doesDrive = false;

// only if condition 

if (age != 19) {
    console.log('Age is not 19');
}

if (age !== 69) {
    console.log('Age is not 69');
}



// both if else conditon
if (doesDrive || age > 18) {
    console.log("You can drive");
}
else {
    console.log("You cannot drive");
}

let a = 10,
    b = 20;

if (a > b) {
    console.log(true);

}

else {
    console.log(false);
}



// conditional operator or Ternary operator means all the condition in one line
// syntax (condition? statement1: statement2);
console.log(age==45? 'Age is 45': 'Age is not 45');


// switch case

switch(age){
    case 18:
        console.log("You are 18");
        break;

      case 28:
          console.log("You are 28");
          break;

        case 38:
            Console.log("You are 38");
            break;

            default:
                 console.log("Age is just a number :) ");
         
}

