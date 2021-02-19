//  For, While and Do while Loops in JavaScript

console.log(" For, While and Do while Loops in JavaScript");

// while loop
// let i=0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }


// Do while loop and if statement
// let k = 0;
// do {
//     if(k===5){
//         k +=1;
//         continue;
//     }
//   console.log(k + 1);
//   k +=1;
// } while (k < 10);


// for loop
// let a = [1,2,3,4,5,6,7,8];
// for( let i=0; i<=7; i++)
// {
//     console.log(a[i]);
// }

let arr = [1,2,3,45,5];
for (let i=0;  i<arr.length; i++)
{
  const element = arr[i];
  console.log(element);
}

// arr.forEach(function(element, index, array){
//     console.log(element, index, array);
// });

arr.forEach(function(element, index, array ){
    console.log(index,element,array);
});


// let obj = {
//         name: "Rohan Das",
//         age: 78,
//         type: "Dangerous Programmer",
//         os: "Ubuntu"
//     };
//     for(let key in obj){
//         console.log(`The ${key} of object is ${obj[key]}`);
//     }
    

    let object = {
        name: "mohammad asif",
        age : 20,
        profession: "web developer"
    };

    for(let key in object){
        console.log(`the ${key} of person is ${object[key]}`)
    };