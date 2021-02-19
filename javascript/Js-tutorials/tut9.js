// Functions and scopes in JavaScript
console.log("Functions in JavaScript");
 

// function syntax
/*
 function functionname(parameter1,parameter2){
                   function body
          
  }
 */



// function decleration and function body without return value

/*
 function add (x,y){
    z = x + y;
    console.log(z);
}
 
let a = 1,
    b=2;
function call
add(a,b);

*/


/*
function greet(name, thank){
      console.log(`Happy Birthday ${name} How I wish I could fly to you right now and be with you on this special day of yours. But remember, my good wishes are always there with you.${thank}!`);
}
// let name = `Mohammad asif`;
// let  name = `irshad akram`;
let  name = 'Codewithharry';
greet(name, 'Thanks a lot');

*/


/*
function greet(name, thank='Thanks a lot'){
    console.log(`Happy Birthday ${name} How I wish I could fly to you right now and be with you on this special day of yours. But remember, my good wishes are always there with you.${thank}!`);
}
// let name = `Mohammad asif`;
// let  name = `irshad akram`;
let  name = 'Codewithharry';
greet(name);

*/



// function decleration and function body with return value 

/*
function greet(name, thank='Thanks a lot'){
    let msg = `Happy Birthday ${name} How I wish I could fly to you right now and be with you on this special day of yours. But remember, my good wishes are always there with you.${thank}!`;
    return msg;
}
// let name = `Mohammad asif`;
// let  name = `irshad akram`;
let  name = 'Codewithharry';
let print = greet(name);
console.log(print);
*/


/*
function add1(x, y) {
    z = x + y;
    return z;
}

let a = 5,
    b = 2;
let d = add1(a, b);
console.log(d);
 */



// Assigning a Function into a variable
/*
const mygreet = function(name, thank='Thanks a lot'){
    let msg = `Happy Birthday ${name} How I wish I could fly to you right now and be with you on this special day of yours. But remember, my good wishes are always there with you.${thank}!`;
    return msg;
}
// let name = `Mohammad asif`;
// let  name = `irshad akram`;
let  name = 'Codewithharry';
let print = mygreet(name);
console.log(print);
*/



// Function in a object
const blog = {
    name: "Mohammad Asif",
    game: function(){
        return 'GTA';
    }
}
console.log(blog.game());


// forEach element to print the element, index, array in an array
arr = ['fruit','vege','bags'];
arr.forEach(function(element, index, array) {
            console.log(element, index,array);   
});



// Understanding the scopes







