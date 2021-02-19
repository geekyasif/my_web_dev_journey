// tut19 Exercise 2

/*
You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.
*/




// created a div container
let textArea = document.createElement('div');
textArea.setAttribute('id', 'divId');
textArea.setAttribute('class', 'divClass')
textArea.setAttribute('style', 'border:2px solid red; width:154px; height:50px; margin: 12px 2px; padding: 12px 12px;')

// set local storage
let val = localStorage.getItem('text');
let text;
if(val == null)
{
text = document.createTextNode('This is an editable div');
}
else{
  text = document.createTextNode(val);
}

textArea.appendChild(text);
// console.log(textArea);


// target and Insert the element ( to insert div before element with id first

let container = document.querySelector('.container');
myfirst = document.getElementById('myfirst');
container.insertBefore(textArea, myfirst);
console.log(container, textArea, myfirst);


// add event lister 
textArea.addEventListener('click', function () {
  let notextArea = document.getElementsByClassName('textarea').length;
  if (notextArea == 0) {
    let html = divId.innerHTML;
    textArea.innerHTML = ` <textarea class="textarea form-control" id="textarea" rows="3"> ${html}</textarea>`;
  }
  
  // listen for the blur event
  let textarea = document.getElementById('textarea');
  textarea.addEventListener('blur',function(){
    divId.innerHTML = textarea.value;
    localStorage.setItem('text',textarea.value);
  })
});

