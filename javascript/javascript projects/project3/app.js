console.log('this app is working');

// Get input element
let input = document.getElementById('input');

// Add event lisenter to input
input.addEventListener('keyup', function () {

    let inputValue = document.getElementById('input').value.toUpperCase();
    // console.log(inputValue);

    // Get ul 
    let ul = document.getElementById('ul')

    // Get list items
    let li = ul.querySelectorAll('li.list-group-item');

    // iterate the ul list items
    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];
        console.log('working')

        //  if matches
        if (a.innerHTML.toUpperCase().indexOf(inputValue) > -1) {

            li[i].style.display = '';

        }
        else {
            li[i].style.display = 'none';
        }
    }

});

