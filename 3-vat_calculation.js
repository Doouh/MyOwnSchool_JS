// Program that asks the user for a raw price. After that, it calculates the corresponding final price using a VAT rate of 20.6%.
let rawPrice = Number(prompt("Enter Raw Price:"));
let finalPrice = rawPrice + rawPrice * 0.206;
alert(`Final Price: ${finalPrice}`);
