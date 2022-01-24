var timerInterval;
var minutes = 0;
var seconds = 0;
var currentRound = 0;
var timeLeft = 10 * 60;

var roundNames = ["Dogovor","Govor A1","N4 ispituje A1","Govor N1","A4 ispituje N1","Govor A2", "N1 ispituje A2", "Govor N2", "A1 ispituje N2", "Govor A3", "N2 ispituje A3", "Govor N3", "A2 ispituje N3", "Govor A4","N3 ispituje A4", "Govor N4","A3 ispituje N4","Govor A5", "Govor N5"];

var roundTimes = [10,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

function updateClock(startTime) {
    var endTime = startTime + (timeLeft * 1000)
    var change = endTime - Date.now();
    var secondsDiff = Math.floor(change / 1000);
    seconds = secondsDiff % 60;
    minutes = Math.floor((secondsDiff) / 60);
    var secondsString = "";
    if (seconds < 10) {
        secondsString = "0" + seconds;
    }
    else {
        secondsString = seconds;
    }
    document.getElementById("clock").innerHTML = `${minutes}:${secondsString}`;

    if(roundTimes[currentRound]%2 == 1){
        var halfm = Math.floor(roundTimes[currentRound]/2);
        var halfs = 30;
    }else{
        var halfm = roundTimes[currentRound]/2;
        var halfs = 0;
    }

    if (minutes == halfm && seconds == halfs) {
        playDing();
        document.getElementById("clock").style.color = "#e87e15";
    }
    
    if (minutes == (halfm/2) && seconds == (halfs/2)) {
        document.getElementById("clock").style.color = "#dc3545";
    }

    if (minutes == 0 && seconds == 0) {
        playAlarm();
        reset();
        document.getElementById("clock").style.color = "#dc3545";
        document.getElementById("clock").innerHTML = '0:00';
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
    timeLeft = minutes * 60 + seconds
    clearInterval(timerInterval);
    document.getElementById("startButton").setAttribute("onClick", "javascript: start()");
    document.getElementById("startTitle").innerHTML = "Start";
    document.getElementById("startIcon").setAttribute("class", "fas fa-play");
}

function reset() {
    timeLeft = roundTimes[currentRound] * 60;
    document.getElementById("clock").innerHTML = `${roundTimes[currentRound]}:00`;
    clearInterval(timerInterval);
    document.getElementById("startButton").setAttribute("onClick", "javascript: start()");
    document.getElementById("startIcon").setAttribute("class", "fas fa-play");
    document.getElementById("clock").style.color = "black";
}

function nextRound() {
    if (currentRound <  roundNames.length-1) {
        currentRound++;
    }
    document.getElementById("roundName").innerHTML = roundNames[currentRound];
    document.getElementById("nextName").innerHTML =  `U Pripremi: ${roundNames[currentRound+1]}`;
    if(currentRound == roundNames.length-1){
        document.getElementById("nextName").innerHTML =  ` `;
    }
    reset();
}

function lastRound() {
    if (currentRound > 0) {
        currentRound--;
    }
    document.getElementById("roundName").innerHTML = roundNames[currentRound];
    document.getElementById("nextName").innerHTML =  `U Pripremi: ${roundNames[currentRound+1]}`;
    if(currentRound == 0){
        document.getElementById("nextName").innerHTML =  `U Pripremi: ${roundNames[1]}`;
    }
    reset();
}

function playDing() {
    document.getElementById("ding").play();
}

function playAlarm() {
        document.getElementById("alarm").play();
}

