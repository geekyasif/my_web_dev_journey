// tut15 - Creating removing and Replacing element in DOM 
console.log("tut15 - Creating removing and Replacing element in DOM");

// 1. createElement 
// 2. appendChild 
// 3. createTextNode


// to create an element 
/*
1. create a variable to store created element and create your element and put Text
2. then create a variable to store target element 
3. to insert use appendChild keyword and assignt created child/element in targeted element
*/


// This is the first method to insert element 

// 1 creation of eleement 
let createElement = document.createElement('li');
text = document.createTextNode("this is createTextNode");
createElement.appendChild(text);

// to give id and class of an element
createElement.className = 'childul';
createElement.id = 'createdLi';

// to set attribute
createElement.setAttribute('title', "mytitle");
console.log(createElement);

// 2 target element
let target = document.querySelector('ul.this');

// 3.insert element/childnode by appendChild 
target.appendChild(createElement);
console.log(target);



/*
// This is the second method to insert element 

let createElement2 = document.createElement('li');
createElement2.innerText = "This is Created List"
createElement2.innerHTML = "<b>this is created list</b>"
createElement2.className = 'childul';
createElement2.id = 'createdLi';
createElement2.setAttribute('title',"mytitle");
console.log(createElement2);

// 2 target element
let target2 = document.querySelector('ul.this');

// 3.insert element/childnode by appendChild 
target2.appendChild(createElement2);
 console.log(target);

*/



// how to replace element (replaceWith) function
let replaceElement = document.createElement('h3');
textNode = document.createTextNode("this is replace text/element");
replaceElement.id = 'replaceElement';
replaceElement.className = 'replaceElement';
replaceElement.appendChild(textNode);
createElement.replaceWith(replaceElement);


// to replace the Child node
let myul = document.getElementById('myul');
myul.replaceChild(createElement, document.getElementById('firstUi'));



//  to remove child
myul.removeChild(document.getElementById('lastUi'));


// to print class and id of an element
let printId = replaceElement.getAttribute('id');
printClass = replaceElement.getAttribute('class');
console.log(printId, printClass);


// to check id and class of any element
let checkId = replaceElement.hasAttribute('id');
checkClass = replaceElement.hasAttribute('class');
console.log(checkId, checkClass);

// to remove ID or CLASS
let removeId = createElement.removeAttribute('id');
removerCLass = createElement.removeAttribute('class');
console.log(createElement);



// exercise - 2
// quick quiz
// create a heading element with text as "Go to CodeWithHarry" and create an a tag outside it with href = "https://www.codewithharry.com"

let anchorTag = document.createElement('a');
text = document.createTextNode("Go To CodeWithHarry");
anchorTag.appendChild(text);
anchorTag.setAttribute('href', "https://www.codewithharry.com");

let link = document.querySelector('div#myfirst');
link.appendChild(anchorTag);
console.log(anchorTag);






// let anchor = document.createElement('a'); 
// anchor.setAttribute('href',"https://codewithharry.com/"); 
// anchor.innerHTML= "code with harry"; 
// console.log(anchor)