// Program that accepts a day name from the user in the variable, then shows the name of the following day. Incorrect inputs must be taken into account.
let day = prompt("Enter day:");

day = day.toLowerCase();

if (day === "monday") {
    alert("Following day: Tuesday");
} else if (day === "tuesday") {
    alert("Following day: Wednesday");
} else if (day === "wednesday") {
    alert("Following day: Thursday");
} else if (day === "thursday") {
    alert("Following day: Friday");
} else if (day === "friday") {
    alert("Following day: Saturday");
} else if (day === "saturday") {
    alert("Following day: Sunday");
} else if (day === "sunday") {
    alert("Following day: Monday");
} else {
    alert("Isn't a correct day!");
}
