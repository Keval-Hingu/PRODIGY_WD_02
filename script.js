
// Functions variables

const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const elapseButton = document.getElementById("elapse");
const elapsecontainer = document.getElementsByClassName("elapse-time");
const elapseTimeContainer = document.getElementsByClassName("elapse-time-container");
let timer_var;
let i = 0;


function display_time(hourText, minuteText, secondText) {
    if (secondText === 60) {
        minuteText++;
        secondText = 0;
    }
    if (minuteText === 60) {
        hourText++;
        minuteText = 0;
    }
    if (secondText < 10) {
        seconds.textContent = "0" + secondText;
    }
    else {
        seconds.textContent = secondText;

    }
    if (minuteText < 10) {
        minutes.textContent = "0" + minuteText;
    }
    else {
        minutes.textContent = minuteText;
    }
    if (hourText < 10) {
        hours.textContent = "0" + hourText;
    }
    else {
        hours.textContent = hourText;
    }

}


const start = () => {
    timer_var = setInterval(
        () => {

            console.log("start button was click");
            let hourText = Number(hours.textContent);
            let minuteText = Number(minutes.textContent);
            let secondText = Number(seconds.textContent);
            secondText++;
            // seconds.textContent = display_time(hourText, minuteText, secondText);
            display_time(hourText, minuteText, secondText);

        }, 1000);


}


function stop() {
    console.log("Stop Button was click");
    clearInterval(timer_var);
}



function reset() {
    hours.textContent = "0" + 0;
    minutes.textContent = "0" + 0;
    seconds.textContent = "0" + 0;
    console.log("Reset Button was click");
    clearInterval(timer_var);
    elapseTimeContainer[0].innerHTML = "";
    
    elapsecontainer[0].style.display = "none";

}

function elapse_time() {
    let i = 0;

    console.log("elapse time is called");

    console.log(elapseTimeContainer[0].innerHTML);
    elapseTimeContainer[0].innerHTML += `<div class="elapse-time" style="display:block;"> LAP Time : ${hours.innerText} : ${minutes.innerText} : ${seconds.innerText} </div>`;



}


startButton.onclick = start
stopButton.onclick = stop;
resetButton.onclick = reset;
elapseButton.onclick = elapse_time;


