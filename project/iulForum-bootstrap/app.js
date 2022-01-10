console.log("working")
const curRef = location.href;
const link = document.getElementsByClassName('nav-link');
const len =  link.length;

console.log(len);
for(let i = 0; i < len ; i++){
    if(link[i].href === curRef){
        link[i].classList.add("active");
    }
}


const link2 = document.getElementsByClassName('sidebar-link');
const len2 =  link2.length;
for(let i = 0; i < len ; i++){
    if(link2[i].href === curRef){
        link2[i].classList.add("active-sidebar-link");
    }
}


