// tut13 - HTML ELement selectors in JavaScript

console.log("tut13 - HTML ELement selectors in JavaScript");

/*
element selctors:-
1 - Single element selector
2 - multi element selctor
*/


// 1 - Single Element Selectors
 
let elementId = document.getElementById("myfirst");
 
// to find the class,childnode,parentnode in any id
// elementId = elementId.className;
// elementId = elementId.childNodes;
// elementId = elementId.parentNode;

// to use CSS property
elementId.style.color = "tomato";

// to change the innner text of html
elementId.innerText = "Hello Mohammad Asif"

// to grab the html text
// console.log(elementId.innerText);

// to use the property of HTML 
elementId.innerHTML = "<h1>Hello Mohammad Asif</h1>";


// to find the first element of any Class or Id we use (document.querySelector);
let selctor = document.querySelector('#myfirst');
selector = document.querySelector('.child');


//  to select direct by tagname
/*
selctor = document.querySelector('h1');
selctor = document.querySelector('a');
selctor = document.querySelector('form');
*/

 selector = document.querySelector('div');
 selector.style.color = 'green';
//  console.log(selctor);




// 2 - Multi element selctor
let elems = document.getElementsByClassName('child');

// chaning in element
/*
 elems = document.getElementsByClassName('container');
 elems = document.getElementsByTagName('div');
 console.log(elems);
 console.log(elems [0].getElementsByClassName('child'));
*/



//  to ittarate in html collection

// by for loop
/*
for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    console.log(element);
     elems.style.color = 'red'

}
*/


// by Array.from forEach loop
/*
Array.from(elems).forEach(function(element){
    elems.style.color = 'red'
    console.log(elems);
});

*/