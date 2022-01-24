var timerInterval;
var minutes = 0;
var seconds = 0;
var lastMinutes = 0;
var lastSeconds = 0;
var currentRound = 0;

var roundNames = ["Student A: Izlaganje teme", "Student B: Izlaganje teme", "Student A: Replika 1", "Student B: Replika 1",  "Student A: Replika 2", "Student B: Replika 2", "Student A: Replika 3", "Student B: Replika 3","Student A: Zavrsno slovo", "Student B: Zavrsno slovo"];

var roundTimes = [1,3,1,1,1,1,1,1,1,1];

function updateClock(startTime) {
    var change = Date.now() - startTime;
    var secondsDiff = Math.floor(change / 1000);
    seconds = lastSeconds + (secondsDiff % 60);
    minutes = lastMinutes + (Math.floor(secondsDiff / 60));
    var secondsString = "";
    if (seconds < 10) {
        secondsString = "0" + seconds;
    }
    else {
        secondsString = seconds;
    }
    document.getElementById("clock").innerHTML = `${minutes}:${secondsString}`;
    if (minutes == roundTimes[currentRound] && seconds == 0) {
        playDing();
    }
}

function start() {
    var startTime = Date.now();
    timerInterval = setInterval(function () { updateClock(startTime) }, 100);
    document.getElementById("startButton").setAttribute("onClick", "javascript: stop()");
    document.getElementById("startTitle").innerHTML = "Stop";
    document.getElementById("startIcon").setAttribute("class", "fas fa-pause");
}

function stop() {
    lastSeconds = seconds;
    lastMinutes = minutes;
    clearInterval(timerInterval);
    document.getElementById("startButton").setAttribute("onClick", "javascript: start()");
    document.getElementById("startTitle").innerHTML = " Start";
    document.getElementById("startIcon").setAttribute("class", "fas fa-play");
}

function nextRound() {
    if (currentRound < 9) {
        currentRound++;
    }
    document.getElementById("roundName").innerHTML = roundNames[currentRound];
    reset();
}

function lastRound() {
    if (currentRound > 0) {
        currentRound--;
    }
    document.getElementById("roundName").innerHTML = roundNames[currentRound];
    reset();
}

function reset() {
    lastMinutes = 0;
    lastSeconds = 0;
    document.getElementById("clock").innerHTML = `0:00`;
    clearInterval(timerInterval);
    document.getElementById("startButton").setAttribute("onClick", "javascript: start()");
    document.getElementById("startTitle").innerHTML = " Start";
    document.getElementById("startIcon").setAttribute("class", "fas fa-play");
}

function playDing() {
    if (true) {
        document.getElementById("ding").play();
    }
}


