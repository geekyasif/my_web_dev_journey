// Object prototype in javascripts

console.log("this is tut27.js");


// object prototype
function person (name,yearOfBirth){
    this.name = name;
    this.yearofbirth = yearOfBirth;
}

console.log(person.prototype);




// adding prototype in objects usig function
function person (name,yearOfBirth){
    this.name = name;
    this.yearofbirth = yearOfBirth;
}
person.prototype.age = function(){
    console.log("current age is :" + (2020 - this.yearofbirth))
}

console.log(person.prototype)




// object prototype using constructor
function person (name,yearOfBirth){
    this.name = name;
    this.yearofbirth = yearOfBirth;
}

person.prototype.age = function(){
    console.log("current age is :" + (2020 - this.yearofbirth))
}

let Person1 = new person("steve","1999");
console.log(Person1)
Person1.age();
