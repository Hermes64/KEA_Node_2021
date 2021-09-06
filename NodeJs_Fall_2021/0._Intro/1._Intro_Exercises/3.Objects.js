// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const myObj = {
    "message": "Hello, earthling! I bring peace."
};

const myObjValue = Object.values(myObj);
const myObjkeys = Object.keys(myObj);


// Log the message 
console.log(myObjValue)
console.log(myObjkeys)
    // --------------------------------------
    // Exercise 2 - Defining an object. 

// Create an object that has your name and age. 

const me = {
    name: 'Mercurio',
    age: 56
}

console.log(me)

// --------------------------------------
// Exercise 3 - Add a property 

const stackOverflow = {
    isAllowed: true
};

// make a rule called isAllowed and let the value be true

// --------------------------------------
// Exercise 4 - Remove a property 

const thisSong = { "description": "The best song in the world." }

// remove the property "description" and add a property called "about" that should say "Just a tribute." 
delete thisSong["description"] // or delete thisSong.description
thisSong.about = "Just a tribute"

console.log(thisSong)


// --------------------------------------