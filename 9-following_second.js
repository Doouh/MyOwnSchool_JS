// Program that takes any random time as input and returns it by adding a second in it. This would include a bunch of nested if-else statements, so be careful!
let hours = Number(prompt("Enter the hours:"));
let minutes = Number(prompt("Enter the minutes:"));
let seconds = Number(prompt("Enter the seconds:"));

if (hours  >= 0& hours <= 23 && minutes >= 0 && minutes <= 59
    && seconds >= 0 && seconds <= 59) {
    if (hours === 23 && minutes === 59 && seconds === 59) {
        seconds = 0;
        minutes = 0;
        hours = 0;
    } else if (minutes === 59 && seconds === 59) {
        hours++;
        minutes = 0;
        seconds = 0;
    } else if (seconds === 59){
        minutes++;
        seconds = 0;
    } else {
        seconds++;
    }
    alert(`In a second, time will be ${hours} hours, ${minutes} minutes and ${seconds} seconds.`);
} else {
    alert("The time isn't correct");
}
