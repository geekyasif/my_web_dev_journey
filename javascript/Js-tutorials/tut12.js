// Exercise 1 WebPage Crawler In JavaScript


// Question :- 

// 1 :-You have to create a variable which is a string containing the text which is a link you are interested in. 

// 2: - You have to fetch all the links from a given page which contains this text


// solution 

let str = "javascript";
let links = document.links;
console.log(links);
let href;
Array.from(links).forEach(function(element){
    href = element.href;
    if (href.includes(str)){
 console.log(href);
    }
});


// solution 

let links=document.links;
for(let index=0;index<=links.length;index++)
{
if(links[index].href.includes("Harry"))
{
document.write(links[index].href);
}
}


// solution 
let a=document.links[0].innerText;
if(a.match("website")){

    
    console.log("this is website")
}else{
    console.log("this is not website")
}


// solution 

let links = document.links
console.log(links)
Array.from(links).forEach(function (elements) {
    let p=elements.toString()
    if(p.includes('image')){
    console.log(p)
    }  
})


// solution 
/Challenge completed 
let b=document.links;
Array.from(b).forEach(function(element){
 if(String(element).includes("javascript"))
    console.log(element);
});

// solution 
let string = 'javascript';
let a=document.links;
let b=Array.from(a);
b.forEach(function(i){
    let str = String(i);
    if(str.includes(string))
        console.log(i);
})


// solution 
let str = `javascript`;
console.log(str);

let targetLinks = document.links;
console.log(targetLinks);

Array.from(targetLinks).forEach((e) => {
  // console.log(e.href);
  if(e.href.includes(str)){
    console.log(e);
  }else{
    console.log('Specified string s not present in the link');
  }

}
// solution 

let var = document.links;
let ilink = "harry";
for(i=0;i<var.length;i++)
{
if(var[i].href.includes(ilink)
{
console.log(var[i].href);
}
}


