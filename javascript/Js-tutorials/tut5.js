//String properties,Methods and Templates literals

console.log("String properties,Methods and Templates literals");


// convert string into upper and lowercase
let n = "mohammado";
console.log(n.toLocaleUpperCase());
let m = "ASIF";
console.log(m.toLowerCase());


// to find the length of string
console.log(n.length);


// to add two string with in between space
console.log(n + m);

const name = 'Harry';
const greeting = 'Good Morning';
console.log(greeting + ' ' + name);


// to print the index number the character
// if not present then print -1
// console.log(n.indexOf('n'))
console.log(n.indexOf('o'));
console.log(n.lastIndexOf('m'));


// to print the charcter with index number
console.log(n[7]);
console.log(n.charAt('4'));
console.log(n.includes(' asif '));
console.log(n.substring(1, 3));


// to print characters from at particular place with the help of index number
console.log(n.slice(0, 4))


// to split the string with the help of any character
console.log(n.split('h'));


// to replace the string or character
console.log(n.replace('mohammado', 'mohammad'));

let html;
html = "<h1>this is js tutorial</h1>" +
    "<p>in this tut we learn about string</p>";
console.log(html);

html = html.concat('this', ' str2');
console.log(html);
console.log(html[10]);




// templates literals

let fruit1 = 'Orange\'';
let fruit2 = 'Apple';
let myHtml = `Hello ${name}
            <h1> This is "my" heading </h1>
            <p> You like ${fruit1} and ${fruit2}`;

document.body.innerHTML = myHtml;       