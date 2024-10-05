// Question 1: Declare and initialize an empty multidimensional array
let emptyMultiArray = [];

// Question 2: Declare and initialize a multidimensional array
let matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1],
];

// Question 3: Program to print numeric counting from 1 to 10
document.write("<b>Counting:</b><br>");
for (let i = 1; i <= 10; i++) {
    document.write(i + (i < 10 ? ", " : "<br><br>"));
}

// Question 4: Print multiplication table of a given number
let number = prompt("Enter a number to show its multiplication table:");
let length = prompt("Enter length of multiplication table:");
document.write("<b>Multiplication table of " + number + ":</b><br>");
for (let i = 1; i <= length; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
}

// Question 5: Write a program to print items of the following array using a loop
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
document.write("<b>Fruits:</b><br>");
for (let i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
}

// Question 6: Generate various series
document.write("<b>Counting:</b><br>");
for (let i = 1; i <= 15; i++) {
    document.write(i + (i < 15 ? ", " : "<br><br>"));
}
document.write("<b>Reverse Counting:</b><br>");
for (let i = 10; i >= 1; i--) {
    document.write(i + (i > 1 ? ", " : "<br><br>"));
}
document.write("<b>Even:</b><br>");
for (let i = 0; i <= 20; i += 2) {
    document.write(i + (i < 20 ? ", " : "<br><br>"));
}
document.write("<b>Odd:</b><br>");
for (let i = 1; i < 20; i += 2) {
    document.write(i + (i < 19 ? ", " : "<br><br>"));
}
document.write("<b>Series:</b><br>");
for (let i = 2; i <= 20; i += 2) {
    document.write(i + "k" + (i < 20 ? ", " : "<br><br>"));
}

// Question 7: Search in an array
let bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
if (bakeryItems.indexOf(userInput.toLowerCase()) !== -1) {
    document.write(userInput + " is <b>available</b> at index " + bakeryItems.indexOf(userInput.toLowerCase()) + " in our bakery.<br><br>");
} else {
    document.write("We are sorry. " + userInput + " is <b>not available</b> in our bakery.<br><br>");
}

// Question 8: Identify the largest number
let numbers = [24, 53, 78, 91, 12];
let largest = Math.max(...numbers);
document.write("<b>Array items:</b> " + numbers.join(", ") + "<br>");
document.write("The largest number is " + largest + "<br><br>");

// Question 9: Identify the smallest number
let smallest = Math.min(...numbers);
document.write("<b>Array items:</b> " + numbers.join(", ") + "<br>");
document.write("The smallest number is " + smallest + "<br><br>");

// Question 10: Print multiples of 5 ranging from 1 to 100
document.write("<b>Multiples of 5 from 1 to 100:</b><br>");
for (let i = 5; i <= 100; i += 5) {
    document.write(i + (i < 100 ? ", " : ""));
}
