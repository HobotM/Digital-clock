$(document).ready(function(){
function showTime(){
    //Get current time
    var date = new Date();

    // Make Variables to get hours, minutes, seconds, miliseconds
    var hours = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var sec = date.getSeconds();
    var milisec = date.getMilliseconds();
    // AM, PM Settin
    var session = "AM"

    // Condition for time behaviour
    if(hours==0) {
        hours = 12;
    }

    if(hours >= 12){
        session = "PM";
    }
    if(hours > 12)
    {
        hours = hours -12;
    }

    hours = hours < 10 ? "0" + hours : hours;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    milisec = milisec < 100 ? "0" + milisec : milisec;

    //set the variables to span

    $("#hours").text(hours);
    $("#min").text(min);
    $("#sec").text(sec);
    $("#milisec").text(milisec);
    $("#period").text(session);

    // change time every second
    setTimeout(showTime, 1)
}
showTime();



});