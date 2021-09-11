console.log("project: 4- Library  Management");

// object with the help of constructor
function book(bookName, authorName,type) {
    this.name = bookName;
    this.author = authorName;
    this.type = type;
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
    
    if(programming.checked){
        type = programming.value;
    }
    else if (hackingAndCyberSecurity.checked){
        type = hackingAndCyberSecurity.value;
    }
    else if(WebDevelopment.checked){
        type = WebDevelopment.value;
    }
    
    let booklib = new book (bookName, authorName, type);
    console.log("you have submitted the form");
    let table = document.getElementById("table");
    table.innerHTML += `  <tr>
                            <th scope="row"></th>
                             <td>${bookName}</td>
                             <td>${authorName}</td>
                             <td>${type}</td>
                        </tr>`
                        console.log(booklib);

    e.preventDefault();

});