
let valueOfx = document.getElementById('valueOfx');
let valueOfy = document.getElementById('valueOfy');
let resultField = document.getElementById('resultField');
let form = document.getElementById('xIsWhatPercentOfY');

form.addEventListener('submit', function (event) {

    if (!valueOfx.value || !valueOfy.value) {
        alert("Please enter the value in the field !");
    }

    else {
        let x = parseFloat(valueOfx.value);
        let y = parseFloat(valueOfy.value);

        let result = x / y;
        let percent = result * 100;
        resultField.innerText = "Answer " + ": " + percent + "%";
        event.preventDefault();
    }

})