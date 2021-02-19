//  Events and Event Objects in Javascript

console.log("tut17- Events and Event Objects in Javascript");


// to bypass any function (preventDefault is use)

let btn = document.getElementById('btn');
btn.addEventListener('click',fun1);
// btn.addEventListener('dbclick',fun2);
btn.addEventListener('mousedown',fun3);
function fun1(e){
    // console.log("you clicked on submit button",e);
    e.preventDefault();
}


// double click event
/*
function fun2(e){
    console.log("you dbclicked on submit button",e);
    e.preventDefault();
}
*/


// mousedown means only click by any mouse button
function fun3(e){
    console.log("This is a mouesdown",e);
    e.preventDefault();
}


// mouseenter 
/*
document.querySelector('.no').addEventListener('mouseenter',function(){

    console.log("you entered no");
})
*/


//mouseleave
/*
document.querySelector('.no').addEventListener('mouseleave',function(){

    console.log("you exited no");
})
*/


//mousemove
/*
document.querySelector('.container').addEventListener('mousemove',function(e)
{
    // console.log(e.offsetX,e.offsetY);
//   console.log('you trigger mouse move');
  document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetX},${e.offsetY},${e.offsetX})`;
})
*/