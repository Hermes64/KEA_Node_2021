// --------------------------------------
// Arrays, for loops
// --------------------------------------
// Exercise 1 - Array Positioning

const letters = ["a", "b", "c"];
// show b in the console 

for (element of letters) {
    if (element === "b") {
        console.log(element)
    }
}

// --------------------------------------
// Exercise 2 - Array Positioning

const friends = [];

// What a lonely array. Add at least 3 friend objects to it.  

friends.push(1, 'Kiki', 1964)

console.log("Friends array :" + friends)
    // --------------------------------------
    // Exercise 3 - Get the index of first occurance of that value. 

const significantMathNumbers = [0, 2.718, 3.14159, 1729];

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value). 
const indexFound = significantMathNumbers.findIndex(checkNumber => checkNumber === 1729)
console.log("index of 1729 :" + indexFound)



// --------------------------------------
// Exercise 4 - Inserting elements

const diet = ["tomato", "cucumber", "rocket"];

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements cucumber and rocket


const completDiet = diet.splice(2, 0, "soda", "pizza");

console.log("array with inserted extra elements: " +
    diet);



// --------------------------------------
// Exercise 5 - Remove element

// Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already. 

const newDiet = diet.pop();
console.log("Array where the last element is removed :" + diet)



// --------------------------------------
// Exercise 6 - Copy array

// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.  

dinnerTray = [...diet];
console.log("New cloned array :" + dinnerTray)

// --------------------------------------
// Exercise 7 - For loop

const lettersExpanded = ["a", "b", "c", "d", "e", "f", "g", "h"];

// log every second char in the array starting from b

const x = lettersExpanded.filter((element, index) => {
    return index % 2 !== 0;
})

console.log("Array of every second element in the array starting from b : " + x)

// --------------------------------------
// Exercise 8 - For loop and if statement

const numbers = [5, 3, 2, 7, 11, 12, 0, -20, 6];

const discardedNumbers = [];

console.log("List of elemnts bigger than 6 or lower than 0 : ")

for (element of numbers) {
    if (element > 6 || element < 0) {
        console.log(element);
    } else {
        discardedNumbers.push(element);

    }

}

console.log("disgardedNumbers array: " + discardedNumbers);

// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers

// --------------------------------------