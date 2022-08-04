//  Template literal

/* Do the following:
- Define a variable named `username` using `const` keyword and assign your name as a value.

```js
const username = "\`Akshay\`";

- Define another variable named `bio` and assign a value `Learning to code`. Use `let` keyword to define the variable.

``js
let bio = `\`Leraning to code\``;

/* Do the following using `+` operator
  - Alert message saying `I am [username] and my bio is [bio]`. Replace square brackets with the value of variable.
 
```js
let firstName = "Akshay";
let lastName = "Coding";
let userName = firstName + lastName;
let bio = "Learning to code";
alert("I am"+" " +userName +" " +"and my bio is" +" " +bio);

  - Alert the message `I'm Arya Stark of Winterfell` using the variable name firstName and lastName.
*/
let firstName = "Arya";
let lastName = "Stark";

alert("I\'m" +" " +firstName +" " +lastName +" " +"of Winterfell");
/* Do the following using string template literal
  - Alert message saying `I am [username] and my bio is [bio]`. Replace square brackets with the value of variable.
  `I am ${userName} and my bio is ${bio}`
  - Alert the message `I'm Arya Stark of Winterfell` using the variable name firstName and lastName.
  `I\`m ${firstName} ${lastName} of winterfell`
*/

let amount = 200;
const taxPercent = 10;

/* Use string template literal:
  - Alert a message saying `The total amount is [amount]
    the tax amount is [(amount * taxPercent) / 100]
    let amount =(amount * taxPercent);
    `The total amount is ${(amount) /100}`
  - Above message should be in two lines
*/

/* Use double quote and escape character:
  - Alert a message saying `The total amount is [amount]
    the tax amount is [(amount * taxPercent) / 100]
  ` let amount =(amount * taxPercent);
   `The total amount is ${(amount) /100}`
  - Above message should be in two lines
*/
