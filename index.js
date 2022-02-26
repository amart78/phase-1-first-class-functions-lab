// Code your solution in this file!

/* ---------------------------------------------------------------------------------------
1. returnFirstTwoDrivers() — Declare the variable returnFirstTwoDrivers with const and 
assign an anonymous function to it. The assigned function should accept an array of 
drivers as an argument and return the first two drivers in the array.
*/

const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0,2);
}


/* ---------------------------------------------------------------------------------------
2. returnLastTwoDrivers() — Declare a variable with const that is assigned an anonymous 
function. The assigned function should accept an array of drivers as an argument and 
return the last two drivers in the array.
*/
const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2);
}


/* ---------------------------------------------------------------------------------------
3. selectingDrivers — This is an array containing two elements: the two functions that we 
previously defined (returnFirstTwoDrivers() and returnLastTwoDrivers()).
*/

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];



/* ---------------------------------------------------------------------------------------
4. createFareMultiplier() — This is a higher-order function that takes in one argument, 
an integer, and returns a function that will multiply a fare for a ride accordingly. 
For example, if createFareMultiplier() receives an argument of 4, it will return a function 
that takes in a fare as an argument and quadruples the fare.
*/
function createFareMultiplier(x){
    return function fareMultiplier(y){
        return x * y;
    }

}


/* ---------------------------------------------------------------------------------------
5. fareDoubler() — Declare a variable with const and assign a function returned by 
createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new 
fareDoubler() function accepts a fare as its lone argument and doubles it.
*/

const fareDoubler = function createFareMultiplier(x){
   return x * 2;
}



/* ---------------------------------------------------------------------------------------
6. fareTripler() — Declare a variable with const and assign a function returned by 
createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the 
new fareTripler() function accepts a fare as its lone argument and triples it.
*/

const fareTripler = function createFareMultiplier(x){
    return x * 3;
 }


/* ---------------------------------------------------------------------------------------
7. selectDifferentDrivers() — This function takes two arguments, an array of drivers and 
either the returnFirstTwoDrivers() or returnLastTwoDrivers() function. Based on these two 
arguments, selectDifferentDrivers() will return either the first two drivers or the last 
two drivers.
*/

function selectDifferentDrivers(drivers, fn){
    return fn(drivers);
}

