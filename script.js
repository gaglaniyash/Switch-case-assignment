// question 1. Write a program using a `switch` statement that takes a number (1 to 7) as input and prints the corresponding day of the week.

// function weekDays(days) {
//     let number = parseInt(days);
//     switch (number) {
//         case 1:
//             document.getElementById("result").innerHTML = "Monday";
//             break;
//         case 2:
//             document.getElementById("result").innerHTML = "Tuesday";
//             break;
//         case 3:
//             document.getElementById("result").innerHTML = "Wednesday";
//             break;
//         case 4:
//             document.getElementById("result").innerHTML = "Thursday";
//             break;
//         case 5:
//             document.getElementById("result").innerHTML = "Friday";
//             break;
//         case 6:
//             document.getElementById("result").innerHTML = "Saturday";
//             break;
//         case 7:
//             document.getElementById("result").innerHTML = "Sunday";
//             break;
//         default:
//             document.getElementById("result").innerHTML = "Please enter a number between 1 to 7";
//             break;
//     }
// }

// function main() {
//     let days = document.getElementById("days").value;
//     weekDays(days);
// }

// 2. Calculator:
// Write a program that acts as a simple calculator using a `switch` statement.
// function simpleCalculator(a, b, sign) {
//     op = sign;
//     switch (a, b, op) {
//         case '+':
//             document.getElementById("result").innerHTML = (a + b);
//             break;
//         case '-':
//             document.getElementById("result").innerHTML = (a - b);
//             break;
//         case '*':
//             document.getElementById("result").innerHTML = (a * b);
//             break;
//         case '/':
//             document.getElementById("result").innerHTML = (a / b);
//             break;
//         default:
//             document.getElementById("result").innerHTML = "Enter only +, -, *, / these operator";
//     }
// }

// function main() {
//     let a = parseInt(document.getElementById("a").value);
//     let b = parseInt(document.getElementById("b").value);
//     let op = document.getElementById("operator").value;
//     simpleCalculator(a, b, op);
// }

// 3. Traffic Light:
// Write a program that takes a color of a traffic light as input (red, yellow, green) and uses a `switch` statement to print the corresponding action:

// function trafficLight() {
//     let color = document.getElementById("colour").value;

//     switch (color) {
//         case "red":
//             document.getElementById("action").innerHTML = "Stop";
//             break;
//         case "yellow":
//             document.getElementById("action").innerHTML = "Get Ready";
//             break;
//         case "green":
//             document.getElementById("action").innerHTML = "Go";
//             break;
//         default:
//             document.getElementById("action").innerHTML = "Please enter valid traffic light colour";
//     }
// }
// 4. Grade Evaluation:
// Write a program that calculates grades using a `switch` statement. Take a student's percentage (0-100) as input and assign a grade:
// function checkGrade() {
//     let grade = parseInt(document.getElementById("grade").value);

//     switch (true) {
//         case (grade >= 90 && grade <= 100):
//             document.getElementById("result").innerHTML = "Grade A";
//             break;
//         case (grade >= 80 && grade <= 89):
//             document.getElementById("result").innerHTML = "Grade B";
//             break;
//         case (grade >= 70 && grade <= 79):
//             document.getElementById("result").innerHTML = "Grade C";
//             break;
//         default:
//             document.getElementById("result").innerHTML = "Fail";
//             break;
//     }
// }

// 5. Month Name:
// Write a program that takes a number (1 to 12) as input and outputs the corresponding month using a `switch` statement.
// function checkMonth() {
//     let Month = document.getElementById("month").value;

//     switch (Month) {
//         case "1":
//             document.getElementById("result").innerHTML = "January";
//             break;
//         case "2":
//             document.getElementById("result").innerHTML = "February";
//             break;
//         case "3":
//             document.getElementById("result").innerHTML = "March";
//             break;
//         case "4":
//             document.getElementById("result").innerHTML = "April";
//             break;
//         case "5":
//             document.getElementById("result").innerHTML = "May";
//             break;
//         case "6":
//             document.getElementById("result").innerHTML = "June";
//             break;
//         case "7":
//             document.getElementById("result").innerHTML = "July";
//             break;
//         case "8":
//             document.getElementById("result").innerHTML = "August";
//             break;
//         case "9":
//             document.getElementById("result").innerHTML = "September";
//             break;
//         case "10":
//             document.getElementById("result").innerHTML = "October";
//             break;
//         case "11":
//             document.getElementById("result").innerHTML = "November";
//             break;
//         case "12":
//             document.getElementById("result").innerHTML = "December";
//             break;
//         default:
//             document.getElementById("result").innerHTML = "Please enter a valid number between 1 to 12";
//     }
// }