
// Declare variables to store input values
var num1, num2;

// Uncomment the following lines to take input from the user
// num1 = window.prompt("Input the First integer", "0");
// num2 = window.prompt("Input the second integer", "0");

// Compare the values and print the larger or equality 
if (parseInt(num1, 10) > parseInt(num2, 10)) {
  console.log("The larger of " + num1 + " and " + num2 + " is " + num1 + ".");
} else if (parseInt(num2, 10) > parseInt(num1, 10)) {
  console.log("The larger of " + num1 + " and " + num2 + " is " + num2 + ".");
} else {
  console.log("The values " + num1 + " and " + num2 + " are equal.");
}
