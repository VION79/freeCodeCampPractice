/* Problem
Use Recursion to Create a Range of Numbers
Continuing from the previous challenge, we provide you another opportunity to create a recursive function 
to solve a problem.

We have defined a function named rangeOfNumbers with two parameters. The function should return an array 
of integers which begins with a number represented by the startNum parameter and ends with a number represented 
by the endNum parameter. The starting number will always be less than or equal to the ending number. Your 
function must use recursion by calling itself and not use loops of any kind. It should also work for cases 
where both startNum and endNum are the same.
Your function should return an array.

Your code should not use any loop syntax (for or while or higher order functions such as forEach, map, 
filter, or reduce).
rangeOfNumbers should use recursion (call itself) to solve this challenge.
rangeOfNumbers(1, 5) should return [1, 2, 3, 4, 5].
rangeOfNumbers(6, 9) should return [6, 7, 8, 9].
rangeOfNumbers(4, 4) should return [4].
Global variables should not be used to cache the array.

*/

// Setup
function rangeOfNumbers(startNum, endNum)
{
    if (endNum < startNum)
    {   
        return [];
    }   
        else 
        {
            const numbers = rangeOfNumbers(startNum, endNum - 1);
            numbers.push(endNum);
            return numbers;
        }
};

console.log (rangeOfNumbers (3,2));

/* Node.js result in the terminal

C:\Users\Acer-aspire-es1\githubrepo_acer\freeCodeCampPractice>node practice_100.js
[ 3, 4, 5, 6, 7 ]

C:\Users\Acer-aspire-es1\githubrepo_acer\freeCodeCampPractice>node practice_100.js
[ 4 ]

C:\Users\Acer-aspire-es1\githubrepo_acer\freeCodeCampPractice>node practice_100.js
[ 4 ]

C:\Users\Acer-aspire-es1\githubrepo_acer\freeCodeCampPractice>node practice_100.js
[]

*/

