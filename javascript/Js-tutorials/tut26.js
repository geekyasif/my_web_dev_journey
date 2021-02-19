console.log("this is tut26")

// This is General Objects using Object literals
/*
let obj = {
    name : "mohammad asif",
    branch : "BCA",
    section : "C",
    enroll : 1900101080,
};
// console.log(obj);
*/


// Creating objects using Constructors
// example - new Date() is also a constructor

function students(givenName,givenBranch,givenSection){
    this.name = givenName;
    this.branch = givenBranch;
    this.section = givenSection;
    this.bio = function(){
       console.log(`my name is ${this.name} and i from ${this.branch} branch group ${this.section}`)
    }
}

let student = new students ("mohammad asif","bca","C");
console.log(student);
// console.log(student.bio());



//This is also a object create using constructor
/*
function developer (name,language){
    this.name = name;
    this.language = language;

}

let dev = new developer("asif","javascript");
console.log(dev);
*/


// this also a object create using classes
/* 
class web {
    constructor(name,collage){
        this.name = name;
        this.collage = collage;
    }
}

let stud = new web ("para-commando","univeersity of lucknow");
console.log(stud)
*/