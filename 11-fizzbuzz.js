// Program that shows all numbers between 111 and 100100100 with the following exceptions:
// It shows "Fizz" instead if the number is divisible by 333.
// It shows "Buzz" instead if the number is divisible by 555 and not by 333.
// It shows "FizzBuzz" instead for numbers divisible both by 3 and by 5. 
let i = 1;
while (i <= 100)
{
    if (i % 15 === 0)
        console.log("FizzBuzz");
    else if (i % 5 === 0)
        console.log("Buzz");
    else if (i % 3 === 0)
        console.log("Fizz");
    else
        console.log(`${i}`);
    i++;
}
