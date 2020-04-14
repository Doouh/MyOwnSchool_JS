// Program that accepts a month number (between 111 and 121212), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.
let numberMonth = Number(prompt("Enter month number:"));

if (numberMonth === 1 || numberMonth === 3 || numberMonth === 5
    || numberMonth === 7 || numberMonth === 8 || numberMonth === 10
    || numberMonth === 12) {
    alert("Number of days: 31");
} else if (numberMonth === 4 || numberMonth === 6 || numberMonth === 9
           || numberMonth === 11) {
    alert("Number of days: 30");
} else if (numberMonth === 2) {
    alert("Number of days: 28");
} else {
    alert("Please enter a valid number of month");
}
