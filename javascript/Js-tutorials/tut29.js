console.log("exercise - 4 - library system ");

/*
create a class libray and implement the following: 
constructor must take the book list as an input 
getBookList();
issueBook(bookName,userName)
returnBook(bookName)
*/

class library {
   constructor(bookList)
   {
    this.booklist = bookList;
    this.issueBook = [];
   }
    
   getBookList() {
        // let booklist =  ["C", "C++", "Java"];
        this.booklist.forEach( element => {      
            console.log(element);
        });
    }

    issuedBook(givenBookName, givenUserName) {
        if (this.issuedBook[givenBookName] == undefined) {
            this.issuedBook[givenBookName] = givenUserName;
            console.log("book is issued")
        }
        else {
            console.log("Book is already issueed");
        }
    }

    returnBook(givenBookName){
    delete this.issuedBook[givenBookName];
    console.log("book is return")
    }
}

let libraryinfo = new library(["harrypotter","daredavil","narcos","got","witcher"]);
console.log(libraryinfo);
console.log(libraryinfo.issuedBook("witcher","got"));
// console.log(libraryinfo.returnBook("witcher"));
console.log(libraryinfo.issuedBook("daredavil","asif"));
console.log(libraryinfo.returnBook("daredavil"));


