// -------------------------------------------
// Part 1: 🔐 Login & Access Control
// -------------------------------------------

let username = prompt("Enter your username (admin or user):").trim();
let password = prompt("Enter your password:").trim();

if ((username === "admin" || username === "user") && password === "1234") {
  let role = username;
  let securityLevel = role === "admin" ? "high" : "low";
} else {
  alert("Incorrect credentials. Access denied.");
  throw new Error("Login failed");
}

// -------------------------------------------
// Part 2: ☕ Coffee Shop Order Calculator
// -------------------------------------------

let name = prompt("What's your name?");
let age = parseInt(prompt("How old are you?"));

let coffeeType = prompt("Choose your coffee: espresso, latte, or cappuccino").toLowerCase();
let quantity = parseInt(prompt("How many cups would you like?"));

let pricePerCup = 0;

if (coffeeType === "espresso") {
  pricePerCup = 2.5;
} else if (coffeeType === "latte") {
  pricePerCup = 3.5;
} else if (coffeeType === "cappuccino") {
  pricePerCup = 4.0;
} else {
  alert("Invalid coffee type. Please refresh and try again.");
  throw new Error("Coffee type not recognized");
}

let originalTotal = pricePerCup * quantity;
let discount = 0;

if (age < 18 || age > 60) {
  discount = originalTotal * 0.10; // 10% discount
}

let finalTotal = originalTotal - discount;

// -------------------------------------------
// Part 3: 🧾 Bill Splitter with Tip
// -------------------------------------------

let numberOfPeople = parseInt(prompt("How many people are splitting the bill? (1, 2, or 3)"));
let tipPercentage = parseInt(prompt("What tip % would you like to add? (0, 5, 10, 15)"));

// Validate inputs
if (![1, 2, 3].includes(numberOfPeople)) {
  alert("Invalid number of people. Please enter 1, 2, or 3.");
  throw new Error("Invalid split input");
}

if (![0, 5, 10, 15].includes(tipPercentage)) {
  alert("Invalid tip percentage. Please enter 0, 5, 10, or 15.");
  throw new Error("Invalid tip input");
}

let tipAmount = finalTotal * (tipPercentage / 100);
let totalWithTip = finalTotal + tipAmount;
let amountPerPerson = totalWithTip / numberOfPeople;

// -------------------------------------------
// Final Output
// -------------------------------------------

alert(
  `Hello ${name}!\n` +
  `You ordered ${quantity} ${coffeeType}(s).\n` +
  `Original total: $${originalTotal.toFixed(2)}\n` +
  `Discount: $${discount.toFixed(2)}\n` +
  `Tip: $${tipAmount.toFixed(2)}\n` +
  `Total with Tip: $${totalWithTip.toFixed(2)}\n` +
  `Split between ${numberOfPeople} person(s): $${amountPerPerson.toFixed(2)} each`
);
