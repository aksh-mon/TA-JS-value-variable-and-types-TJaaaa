// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"

  ```js

let num = 18;
if (num % 2==0) {alert("This is a Even Number");}
else {alert("This is a Odd Number");}

  ```

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.


```js

num1= (prompt('Enter your First Number')); num2 = (prompt ('Enter your Second Number'));
if(num1 > num2){alert(num1);}
else{alert(num2);}

```


// 3. Convert the above code using`?` terniary operator

```js
num1= prompt('Enter your First Number'); num2 = prompt ('Enter your Second Number');
num1 > num2 ?
alert(num1):
alert(num2)

```
/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message "A lannister always pays his debt"
  - `else` print the message " All men must die"

```js

let houseName = prompt("Enter Your House");
if (houseName =="stark"){alert("Winter is coming");}
else if (houseName =="lannister"){alert("A lannister always pays his debt");}
else {alert("All men must die");}

```
// 5. Convert the above code using`?` terniary operator
let houseName = prompt("Enter Your House");
 (houseName=="stark")?"winter is coming": (houseName=="lannister")?"A lannister always pays his debt" : "All Men Must Die"


// Switch

let houseName = prompt("Enter Your House");
switch(true){
  case houseName=="stark": 
  alert("Winter is coming");
  break;
  case houseName=="lannister": 
  alert("A lannister always pays his debt");
  break;
default:
  alert("All men must die");
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
//  if..else vs switch
/*
let salery = prompt("Enter Your Salary");
if (salery <= 20000) {alert (salery / 10);}
else if(salery <= 40000) {alert (salery / 20);}
else if (salery >= 50000) {alert(salery / 30);}

/*Switch
let salery = prompt("Enter Your Salary");

switch(true){
 case(salery <= 20000): 
 alert (salery / 10);
 break;
 case(salery <= 40000): 
 alert (salery / 20);
 break;
 case(salery > 50000): 
 alert (salery / 30);
 break;
 }
/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

let marks = prompt("Enter Your Marks");
if (marks >= 100) {alert ("Marks can't be greater than 100");}
else if (marks > 80 && marks < 100) {alert ("Grade A");}
else if (marks > 50 && marks < 80) {alert("Grade B");}
else if (marks > 30 && marks < 50) {alert("Grade C");}
else if (marks > 0) {alert("Grade D")}

//switch

let marks = prompt("Enter Your Marks");
switch(true){
case (marks >= 100) : 
alert ("Marks can't be greater than 100");
break;
case (marks > 80 && marks < 100) : 
alert ("Grade A");
break;
case (marks > 30 && marks < 50) : 
alert ("Grade B");
break;
case (marks > 0) : 
alert ("Grade C");
break;
}

*/

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather li ke outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
/*
let weather = prompt("What is the weather li ke outside?");
switch(weather) {
  case ("sunny"):
  alert ("Wear a T-shirt");
  break;
  case ("rainy") :
  alert ("Don't forget to take your raincoat");
  break;
  case("hot") :
  alert("Get a hanky");
  break;
  case ("freezing") :
  alert ("Get your sweater on");
  break;    
  default:
  alert ("Not a Valid Input");
}
/*