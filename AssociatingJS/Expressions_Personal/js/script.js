/* 
    Laurie Shuck
    January 16, 2014
    Expressions Personal Assignment
 */

//Dinner with friends

//When I go to dinner with friends, we often split the bill evenly after we decide on the tip amount. This caluculator will determine the cost of each diner's portion of the bill after the gratuity has been added.

//We will begin by finding out the cost of the bill.
var bill = prompt("What is the total cost of your bill?");

//Next, we will find out how many people are dining.
var diners = prompt("How many diners?");

//Then, we will find out the percentage of tip that they would like to leave.
var tip = prompt("How much of a tip would you like to leave? \nExample: 20 indicates 20%.");

//Here we will convert the tip input to percentage
var tipCalc = tip /= 100;

//Here we will name a variable that will make the calculation
var dinerCost = (bill + bill * tipCalc) / diners;
















