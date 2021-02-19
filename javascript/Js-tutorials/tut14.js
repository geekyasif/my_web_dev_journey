// tut14 - Children, Parent And Traversing in DOM ( how to traverse DOM (HTML PAGE) )

console.log("tut14 - Children, Parent And Traversing in DOM");

// let cont = document.querySelector('.no');
// cont = document.querySelector('.container');

// childNodes will show all the element but it also show text and comments
// console.log(cont.childNodes);


// children only show elements
// console.log(cont.children);


// nodeName will show tagname
// let nodeName = cont.childNodes[1].nodeName;
// console.log(nodeName);


// nodeType will show number like
// let nodeType = cont.childNodes[0].nodeType
// console.log(nodeType);

/*
1. for Element
2. for Attribute
3. for Text Node
8. for Comment
9. for Document
10. for DocumentType
*/



// to find the children of children of children
let container = document.querySelector('div.container');
console.log(container.children[1].children[0].children[0]);

console.log(container.firstChild);
console.log(container.lastChild);
console.log(container.firstElementChild);
console.log(container.lastElementChild);

// to count the number of child element
console.log(container.childElementCount);

// to find the parent node of any child
console.log(container.firstChild.parentNode);
console.log(container.firstElementChild.parentNode);


// to find the sibling of the of child node
console.log(container.firstChild.nextSibling);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);



