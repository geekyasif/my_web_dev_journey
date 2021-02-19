console.log("this is an alarm clock tutorial")

let clock = document.getElementById('clock');
setInterval(() => {

    let a = new Date()
    let date =  a.getFullYear() + "-" + a.getMonth() + "-" + a.getDate()
    let time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
    let currentTime = date + " " + time;
    // console.log(currentTime);
    clock.innerHTML = currentTime;
}, 1000);



let setAlarmBtn = document.getElementById("setAlarmBtn");

function bellRing(){
    
}


setAlarmBtn.addEventListener('click', function () {

    const alarmInput = document.getElementById('alarmInput');
     alarmDate = new Date(alarmInput.value);
    console.log(alarmDate);

    let displaySetTime = document.getElementById('displaySetTime');
    displaySetTime.innerHTML = "alarm is set on " + alarmDate;
    
    let CurrentDate = new Date();
    let validDate = alarmDate - CurrentDate;
    console.log(validDate);

    if(validDate >= 0){
        setTimeout(() => {
              console.log("bell is ringing")
              bellRing();
        }, validDate);
    }
    else{
        alert("date is invalid")
                console.log('Date is invalid ')

    }



})