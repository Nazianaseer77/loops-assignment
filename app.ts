// Q No1:-  Creating a lesson plan(using for loop)
// Objective: Create a list of lesson objects in typeScript with aiternating statuses to indicate whether 
// each lesson is running this year.
// Step to follow:
// 1: Create a blank array: start by setting up an empty array named myWork that will hold objects.
// 2: Use a loop to create lesson: Write a for loop that runs from 1 to 10. In each iteration:
// *  Create an object representing a lesson
// *  Each lesson should have a name property.which is a string like "Lesson 1", "Lesson2" , etc.
// Each lesson should also have status property. which alternates between tue and false. This means "Lesson1"
// will have status true."Lesson2" will have status false.and so on.
// 3: Add the lesson to the array: Push each lesson object into the myWork array.
// 4: Print the result: Finally, log the myWork array to theconsole to seethe listof lesson.
// Hints:
// * Use the ternaryoperator to set the status property based on whether the lesson numberis odd or even.
// * The modulo operator % can help determine if a number is even or odd. 


  



const myWork = []

for(let i = 1; i <= 10 ; i++){

    let lesson ={
        name:`lesson ${i}`,
        status: i % 2 ===0 ? true : false

    };
    myWork.push(lesson)
};  
console.log(myWork)
        

    
    
/* 2. Guessing Game (Using while loop ) 
Objective: Create a simple number guessing game where the user tries to guess a randomly 
generated number between 1 and a specified maximum value using a predefined set of guesses. 
Steps to Follow: 
1. Set a maximum value: Create a variable to store the maximum value for the number 
guessing game. 
2. Generate a random number: Use Math.random() and Math.floor() to generate a 
random number between 1 and the maximum value. Log this value to the console for 
development purposes. 
3. Track the guess status: Create a variable to track whether the user's guess is correct. Set 
it to false initially. 
4. Simulate user guesses: Use an array to store a series of predefined guesses. 
5. Iterate over guesses: Use a while loop to iterate over the predefined guesses until the 
correct guess is made.
6. Check the user's guess: Inside the loop, check if the current guess matches the random 
number. Provide feedback if the guess is too high or too low. */

let maxNum = 6;
let rndNum = Math.floor(Math.random()*6+1);
console.log(`Random number is: ${rndNum}`);
let isCorrect = false //rndNum===maxNum? false : true;
let storedGuesses = [3, 2, 4, 5, 6, 1];
let i = 0;
while (i <storedGuesses.length && !isCorrect) {
    
    if (storedGuesses[i] === rndNum) {
        console.log(`Well Done! You guess ${storedGuesses[i]} is correct.`)
    }
    else if (storedGuesses[i] > rndNum){
        console.log(`${storedGuesses[i]}, your guessed number is high, try again.`);
    }
    else {
        console.log(`${storedGuesses[i]} is too low, try again.`)
    }
i++;
}
    

// Q No3:- 3. Counter Incrementer (Using do while loop )
// Objective: Create a program that increments a counter by a specified step value using a
// do...while loop and prints the counter value to the console until it reaches or exceeds 100.
// Steps to Follow:
// 1. Set the starting counter to 0: Create a variable counter and initialize it to 0.
// 2. Create a variable, step, to increase your counter by: Define a variable step to hold
// the value by which the counter will be incremented.
// 3. Add a do...while loop: In the loop, print the counter to the console and increment it by
// the step amount each iteration.
// 4. Continue to loop until the counter is equal to or more than 100: The loop should run
// as long as the counter is less than 100.




let counter = 0;


const step = 5; 

do {
  
  console.log(`Counter value: ${counter}`);
  
    counter += step;
} while (counter < 100); 

console.log(`Final counter value: ${counter}`);



// Q No4:- 4.Exploring Objects with for...in Loop
// Objective: Practice working with objects in TypeScript and iterating over their properties using
// a for...in loop.
// Instructions:
// 1. Create a simple object with three items:
// o Define an object called myObject with three properties: item1, item2, and item3,
// each with corresponding string values.

// 2. Use a for...in loop to get properties' names and values from the object:
// o Iterate through the properties of myObject using a for...in loop.
// o Inside the loop, print each property's name and its corresponding value to the



const myObject = {
    item1: "Value 1",
    item2: "Value 2",
    item3: "Value 3"
  };
  
  
  for (const key in myObject) {
    if (myObject.hasOwnProperty(key)) {
      console.log(`Property name: ${key}, Property value: ${myObject[key]}`);
    }
  }




// Q No5:-  5.Exploring Arrays with Loops(Using loop )
// Objective: Practice working with arrays in TypeScript and using for loops and for...of loops
// to iterate through array elements.
// Instructions:
// 1. Create an empty array:
// o Define an empty array called myArray.
// 2. Run a loop 10 times, adding a new incrementing value to the array:
// o Use a for loop to iterate 10 times.

// o In each iteration, add a new incrementing value (starting from 1) to the myArray.
// 3. Log the array into the console:
// o After populating the array, log the myArray into the console.

// 4. Use the for loop to iterate through the array:
// o Use a for loop to iterate through the array elements.
// o Adjust the number of iterations based on the number of values in the array.
// o Output each array element along with its index into the console.
// Use the for...of loop to output the value into the console from the array:
// o Use a for...of loop to iterate through the array elements.
// o Output each array element directly into the console.



let myArray: number[] = [];


for (let i = 1; i <= 10; i++) {
  myArray.push(i);
}

console.log("Array after populating:", myArray);

console.log("Using for loop:");
for (let i = 0; i < myArray.length; i++) {
  console.log(`Index: ${i}, Value: ${myArray[i]}`);
}

console.log("Using for...of loop:");
for (const value of myArray) {
  console.log(`Value: ${value}`);
}


