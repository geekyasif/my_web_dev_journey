// classes and inheritence in javascript

class students {

    constructor(givenName, givenBranch, givenSection) {
        this.name = givenName;
        this.branch = givenBranch;
        this.section = givenSection;
    }

    bio = function () {
        if (this.section == "c") {
            console.log("The co-ordinator of this class is Syed Mohd Faisal sir");
        }
        else {
            console.log("i don't know the name of your cordinator")
        }
    }

    // static is global variable it can be access globaly
    static hod() {
        console.log("HOD of BCA Branch is Dr.Mohd Faisal");
    }
}


let stud = new students("asif", "bca", "c");
// console.log(stud);
// console.log(stud.bio());
// console.log(students.hod());



// Inheritance means access the element of any function using (extends) keyword

class programmer extends students {
    constructor(givenName, givenBranch, givenSection, givenLanguage, givenLanguageTeacher) {
        super(givenName, givenBranch, givenSection)
        this.language = givenLanguage;
        this.languageteacher = givenLanguageTeacher
    }
    
    qualify(){
        if(this.language == "javascript"){
            console.log("Congractulation ! you are hired");
        }
        else{
            console.log("Sorry ! you are fired");
        }
    }
}

let programmers = new programmer("Mohammad Asif", "BCA", "c", "javascript","faisal");
// console.log(programmers);
// console.log(programmers.bio());
console.log(programmers.qualify());

