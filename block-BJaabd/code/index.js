// Condition
// Write your code below each problems:

/*
Write a program that asks the user his/her age and check for the following conditions :

- `if` the age is between 12-55 then print the message "You can participate in the marathon".
- `if` the age is between 4-11 then print the message " You are too young to participate in the marathon".
- `if` the age is less than 4 then print the message " Hey Kiddo! Can You Walk ?"
- `if` the age is greater than 55 then print the message " You are too old to participate in the marthon".
👇
*/
let age = Number (prompt('enter your age'));

if (age >= 12 && age <= 55){
  alert('You can participate in the marathon');
}else if (age >=4 && age <= 11){
  alert('You are too young to participate in the marathon');
}else if( age < 4){
alert ('Hey Kiddo! Can You Walk ?');
}else if (age > 55){
  alert('You are too old to participate in the marthon');
}
// Loops
/*
Given a positive integer `n`. Print the word (hello) in format of heeeello (letter 'e' must be repeated `n` times). Take input from prompt and print the result in alert.

Example:
n = 1 => output: hello
n = 7 => output: heeeeeeello
👇
*/
// [Your code goes here]
let count = +prompt("Enter the number of e!")

const start = "h";
const end = "llo";

let middle = "";

for (let i =0; i < count; i++){
  middle += "e";
}
alert(start + middle + end);

/*
Program to calculate the sum of first n natural numbers(1,2,3...n are known as natural numbers). Prompt user to enter n (using `prompt`) then based on input provided calculate and show result in `alert`.
👇
*/
// [Your code goes here]


let number = Number(prompt('Enter a positive integer: '));

let sum = 0;

for (let i = 1; i <= number; i++) {
    sum += i;
}

alert('The sum of natural numbers:' +sum);

/* Switch Statement

 🎖Using switch statement do the following

Take a number value from user and alert the message if it matches the conditions.
* [ ] ONE, if `number` is equal to 1.
* [ ] TWO, if `number` is equal to 2.
* [ ] THREE, if `number` is equal to 3.
* [ ] FOUR, if `number` is equal to 4.
* [ ] FIVE, if `number` is equal to 5.
* [ ] SIX, if `number` is equal to 6.
* [ ] SEVEN, if `number` is equal to 7.
* [ ] EIGHT, if `number` is equal to 8.
* [ ] NINE, if `number` is equal to 9.
* [ ] PLEASE TRY AGAIN, if  is none of the above.

*/
// [Your code goes here]

let numberValue = Number(prompt('Enter your Number'));

switch(numberValue){
  case 1:
  alert("one");
  break;
  case 2:
  alert("two");
  break;
  case 3:
  alert("three");
  break;
  case 4:
  alert("four");
  break;
  case 5:
  alert("five");
  break;
  case 6:
  alert("six");
  break;
  case 7:
  alert("seven");
  break;
  case 8:
  alert("eight");
  break;
  case 9:
  alert("nine");
  break;
  default:
  alert("Please Try Again");                        
}

/*
🎖Using switch statement do the following

Take the value of `marks` (0-100) from user using `prompt` and `alert` the message (Your Grade is AA) as giver below.
* [ ] `AA` if `marks` is greater than 90.
* [ ] `AB` if `marks` is greater than 80 and less than or equal to 90
* [ ] `BB` if `marks` is greater than 70 and less than or equal to 80
* [ ] `BC` if `marks` is greater than 60 and less than or equal to 70
* [ ] `CC` if `marks` is greater than 50 and less than or equal to 60
* [ ] `CD` if `marks` is greater than 40 and less than or equal to 50
* [ ] `DD` if `marks` is greater than 30 and less than or equal to 40
* [ ] `FF` if `marks` is less than or equal to 30
*/

// [Your code goes here]
let marks = Number(prompt('Enter your Marks'));

switch(true){
  case (marks > 90):
  alert("AA");
  break;
  case (marks >= 80 && marks <= 90):
  alert("AB");
  break;
  case (marks >= 70 && marks <= 80):
  alert("BB");
  break;
  case (marks >= 60 && marks <= 70):
  alert("BC");
  break;
  case (marks >= 50 && marks <= 60):
  alert("CC");
  break;
  case (marks >= 40 && marks <= 50):
  alert("CD");
  break;
  case (marks >= 30 && marks <= 40):
  alert("DD");
  break;
  case (marks <= 30):
  alert("FF");
  break;
}

/*
 🎖Write a JavaScript program that takes two `integers` from user (using prompt) and alerts the larger number.
*/
// [your code goes here]

let numA = Number(prompt('Enter First Integer'));
let numB = Number(prompt('Enter Second Integer'));

switch(true){
  case (numA > numB):
  alert(`${numA} is gretaer`);
  break;
  case (numB > numA):
    alert(`${numB} is gretaer`);
    break;    
}
/*
🎖Write a JavaScript conditional statement to find the sign (+, -) of product of three numbers. Take those three numbers from user using `prompt`. Display an alert box with the specified sign.
*/
// [Your code goes here]

let firstNumber = Number(prompt('Enter First Value Number'));
let secondNumber = Number(prompt('Enter Second Value Number'));
let thirdNumber = Number(prompt('Enter Third Value Number'));
 
if (firstNumber>0 && secondNumber>0 && thirdNumber>0)
{
       alert("The sign is +");
}
else if (firstNumber<0 && secondNumber<0 && thirdNumber<0)
        {
          console.log("The sign is -");
        }
        else if (firstNumber>0 && secondNumber<0 && thirdNumber<0)
        {
          console.log("The sign is +");
        }
        else if (firstNumber<0 && secondNumber>0 && thirdNumber<0)
        {
          console.log("The sign is +");
        }
        else
        {
          console.log("The sign is -");
        }
/* Calculator
 🎖Make a simple calculator with these functions. Using prompt, type conversion, if else statement. Use prompt to take the input from user i.e two numbers and an operation (Add, Sub, Mul, Div).

  ⛑ Rule
    * [ ] While substracting and dividing keep in mind the number one should be greater then number two. If not show alert saying `Number Two is larger then Number one`.
  ⚡️ Operations
    * [ ] Add
    * [ ] Sub
    * [ ] Mul
    * [ ] Div
*/

// [Your code goes here]
const operator = prompt('Enter operator to perform the calculation ( either +, -, * or / ): ');  
  
// accept the number from the user through prompt box  
const number1 = parseFloat(prompt ('Enter the first number: '));  
const number2 = parseFloat(prompt ('Enter the second number: '));  
  
let result; // declaration of the variable.  
  
// use if, elseif and else keyword to define the calculator condition in JavaScript.  
if (operator == '+') { // use + (addition) operator to add two numbers  
    result = number1 + number2;  
}  
else if (operator == '-') { // use -  (subtraction) operator to subtract two numbers  
    result = number1 - number2;  
}  
else if (operator == '*') { // use * (multiplication) operator to multiply two numbers  
    result = number1 * number2;  
}  
else {  
    result = number1 / number2; // use / (division) operator to divide two numbers  
}  

alert (result);
