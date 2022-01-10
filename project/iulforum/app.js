console.log("woking")
let toggleBtn = document.getElementById("toggle-btn");
let toggleDiv = document.getElementById("nav-items");
let toggleSidebar = document.getElementById("toggle-sidebar");
let sidebar = document.getElementById("sidebar");

toggleBtn.addEventListener("click", ()=> {
    console.log("click")
    toggleDiv.classList.toggle("show")
})



toggleSidebar.addEventListener("click", ()=> {
    console.log("click")
    sidebar.classList.toggle("show-sidebar")
})


