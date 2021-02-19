console.log("todo list");



let form = document.getElementById("form").addEventListener("submit", function (e) {
    let val = document.getElementById("addText").value;
    // console.log(val);

    let tableBody = document.getElementById("tableBody");
    tableBody.innerHTML += `<tr>
    <td>
    <div class="form-group form-check" " onclick="check()">
    <input type="checkbox" class="form-check-input" style="cursor:pointer;"id="exampleCheck1">
        </div>
        </td>
        <td>${val}</td>
        <td style="cursor:pointer;" onclick="edit()"><i class="fa fa-edit" style="font-size:24px"></i></td>
        <td style="cursor:pointer;" onclick="del()"><i class="fa fa-close" style="font-size:24px"></i></td>
    </tr>`

    e.preventDefault();
})



function check() {
    console.log("selected")
}

function edit() {
    prompt("dljfdfj")
}
function del() {
    console.log("deleted")
    confirm("are you sure you want to delete this")

