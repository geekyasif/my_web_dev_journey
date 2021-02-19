// DOM ( Document Object Model )
console.log("this is DOM tutorial");

let a = document;
// a = document.all;
//  a = document.forms;
 a = document.links;
// a = document.images;
// a = document.scripts;
console.log(a);




// to print one links ,images,scripts,forms etc from a webpage

/*
let a = document;
 a = document.forms[0]
// a = document.links[0];
// a = document.images[1];
// a = document.scripts[1];
console.log(a);
*/



// to print all the links ,images,scripts,forms etc from a webpage
/*


let a = document.links;
// a = document.images;
// a = document.scripts;
Array.from(a).forEach(function(element){
     console.log(element);
})

*/