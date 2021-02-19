// tut-20 ( Project - 1 ) Keep notes Javascript code

// 1- Add a event listener ( if user add a notes, save the note  into localstorage )

 showNotes();

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {

    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        title: addTitle.value,
        text: addTxt.value
    }
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = "";
    // console.log(notesObj);
    showNotes();
});


// Function to show notes
 function showNotes() {

    // upatind localStorage
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    // adding note card list
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `  <div class="noteCard my-2 mx-2 card" style="width: 16.7rem;">
                     <div class="card-body">
                         <h5 class="card-title"> ${element.title}</h5>
                         <p class="card-text"> ${element.text}</p>
                         <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                     </div>
                 </div>`;
    });

    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `No notes available ! please add some notes.`;
    }
}

//function to delete notes
function deleteNote(index) {
    // console.log('im deletig notes',index);

    // updating localStorage
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    // deleting one card note
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

// search function
let search = document.getElementById("searchTxt")
search.addEventListener("input", function () {
    let inputVal = search.value.toLowerCase();
    // console.log("input fired",inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block"
        } else {
            element.style.display = "none";
        }

    });

});


/*
Further Features:
1. Add Title
2. Mark a note as Important
3. Separate notes by user
4. Sync and host to web server
*/
