// tut18 - Local and Session storage in JavaScript

console.log("Local and Session storage in JavaScript");


// to store data in local Storage
/*
localStorage.setItem('Name','Mohammad Asif');
localStorage.setItem('Name3','Mohammad Asif');
localStorage.setItem('Name2','Shabaj Ansari');
*/


// to clear local storage data
// localStorage.clear()


// to store array in loacal storage using (JSON.strinigy)

let array = ['fruit','vegetables','cloths'];
localStorage.setItem('items',JSON.stringify(array));


// to retrive an item from local storage. Its take string as an argument and returns an array
let name = localStorage.getItem('name');
name = JSON.parse(localStorage.getItem('items'));
console.log(name)



// to store data in session Storage
/*
sessionStorage.setItem('sessionName1','Mohammad Asif');
sessionStorage.setItem('sessionName3','Irshad Akram');
sessionStorage.setItem('sessionName2','Shabaj Asari');
*/