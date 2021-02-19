console.log("project: 4- Library  Management by Constructor and prototype");

//Constructor
function book(bookName, authorName, type) {
    this.book = bookName;
    this.author = authorName;
    this.type = type;
}


// Display constructor
function Display() {


}



// Add methods to display prototype
Display.prototype.add = function (bookList) {
    // display.addBook(bookLib)
    let table = document.getElementById("table");
    table.innerHTML += `<tr>
                             <td>${bookList.book}</td>
                             <td>${bookList.author}</td>
                             <td>${bookList.type}</td>
                             <td>${`<button class="btn btn-primary" onclick="deleteBook(this.table)">Delete Book</button>
                             `}</td>
                        </tr>`     
                        
}

// delete function 
function deleteBook(){
    console.log("deleting");
    
}

Display.prototype.clear = function () {
    let LibraryForm = document.getElementById("libraryForm");
    LibraryForm.reset();
}



// add sumbit eventlisther to LibraryForm
let LibraryForm = document.getElementById("libraryForm");
LibraryForm.addEventListener('submit', function (e) {
    // console.log("you have submited the form")

    let bookName = document.getElementById("bookName").value;
    let authorName = document.getElementById("authorName").value;
    let type;


    let programming = document.getElementById("programming");
    let hackingAndCyberSecurity = document.getElementById("hackingAndCyberSecurity");
    let WebDevelopment = document.getElementById("WebDevelopment");

    if (programming.checked) {
        type = programming.value;
    }
    else if (hackingAndCyberSecurity.checked) {
        type = hackingAndCyberSecurity.value;
    }
    else if (WebDevelopment.checked) {
        type = WebDevelopment.value;
    }

    let bookList = new book(bookName, authorName, type);
    // console.log("you have submitted the form");
    // console.log(bookLib);

    let display = new Display();
    display.add(bookList);
    display.clear();

    e.preventDefault();

});

