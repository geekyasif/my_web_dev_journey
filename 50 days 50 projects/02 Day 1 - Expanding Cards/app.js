const panels = document.querySelectorAll('.panel')

// creating a function for active css 
panels.forEach((panel)=>{

    panel.addEventListener('click', ()=>{
        removeActiveClasses()
        panel.classList.add('active')
    })

})

// creating a function for remove active class
function removeActiveClasses(){
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}

