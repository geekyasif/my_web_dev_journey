// Events and Event Objects in Javascript
console.log("Events and Event Objects in Javascript");

// click event
/*
document.getElementById('heading').addEventListener('click',function(){
  heading.style.color="red";
  console.log("you have clicked on heading and the color has changed")
})
*/



// to redirect on any page using location.href
/*
document.getElementById('heading').addEventListener('click',function(){
    heading.style.color="red";
    location.href= '//codewithharry.com'
  })
*/



// to print event object
/*
document.getElementById('heading').addEventListener('click', function (eventObject) {
    heading.style.color = "red";
    console.log("you have clicked on heading and the color has changed")
    console.log(eventObject);
})
*/


// to know were the mouse is clicked like tag,class,id,attribute name
/*
document.getElementById('heading').addEventListener('click', function (eventObject) {
    let variable = eventObject.target;
    variable = eventObject.target.className;
    variable = eventObject.target.id;
    console.log(variable);
})
*/


// to print classlist and array of the classlist
/*
document.getElementById('heading').addEventListener('click', function (eventObject) {
    let variable = eventObject.target;
    // variable = eventObject.target.classList;
    variable = Array.from(eventObject.target.classList);
    console.log(variable);
})
*/


// to know the location by x and y axis where the cursor is clicked
/*
document.getElementById('heading').addEventListener('click', function (eventObject) {
    let variable = eventObject.target;
    // variable = eventObject.offsetX;
    // variable = eventObject.offsetY;
    // variable = eventObject.clientX;
    variable = eventObject.clientY;
    console.log(variable);
})
*/



// MouseOver event
document.getElementById('heading').addEventListener('mouseover',function(){
  heading.style.color="red";
  console.log("you hover the mouse on heading and it become red");
})

