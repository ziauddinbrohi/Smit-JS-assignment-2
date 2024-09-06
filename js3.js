// question No.1

var city = prompt("enter your city name")
console.log("")
if (city==="karachi") {
    console.log("welcome to the city of lights")
}

// question No.2

var gender = prompt("enter your gender")
if (gender==="male") {
    console.log("Good Morning Sir")  
} 
else if(gender=== "female")
{
    console.log("Good Morning Ma'am")
    
}

// question No.3

var colour = prompt("enter the colour of signal")
if (colour==="red") {
    console.log("must stop")
    
}
else if (colour==="green") {
    console.log("move now")
    
}
else if (colour==="yellow") {
    console.log("ready to move")
}

// question No.4

var fuel = prompt("enter your remianing fuel")
if (fuel <= "0.25"){
    console.log("please refill the fuel in your car")
    
}
else{
    console.log("fuel is okay")
}

// question No.5

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}

if("car" < "cat"){
alert("car is smaller than cat");
}

// question NO.6

var marks1 = +prompt("Enter marks for subject 1:");
var marks2 = +prompt("Enter marks for subject 2:");
var marks3 = +prompt("Enter marks for subject 3:");

var totalObtained = marks1 + marks2 + marks3;
var percentage = (totalObtained / 300) * 100;
var grade, remarks;

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}

document.write("Marks Sheet<br>");
document.write("Total marks: 300<br>");
document.write("Marks obtained: " + totalObtained + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks + "<br>");


// Question NO.7

var secretNumber = 7; 

var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

if (userGuess === secretNumber) {
    document.write("Bingo! Correct answer");
} else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
    document.write("Close enough to the correct answer");
} else {
    document.write("Try again!");
}

// Question No.8

var number = +prompt("Enter a number:");

if (number % 3 === 0) {
    alert("The number " + number + " is divisible by 3.");
} else {
    alert("The number " + number + " is not divisible by 3.");
}


// Question No.9

var number = +prompt("Enter a number:");

if (number % 2 === 0) {
    alert("The number " + number + " is even.");
} else {
   alert("The number " + number + " is odd.");
}

// Question No.10
var temperature = +prompt("Enter the temperature:");

if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today’s Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
} else {
    alert("It's very cold outside!");
}

// Question No. 11
var num1 = +prompt("Enter the first number:");
var num2 = +prompt("Enter the second number:");
var operation = prompt("Enter the operation (+, -, *, /, %):");

var result;

if (operation === "+") {
    result = num1 + num2;
} else if (operation === "-") {
    result = num1 - num2;
} else if (operation === "*") {
    result = num1 * num2;
} else if (operation === "/") {
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        result = "Error: Division by zero is not allowed.";
    }
} else if (operation === "%") {
    result = num1 % num2;
} else {
    result = "Error: Invalid operation.";
}


alert("The result is: " + result);


