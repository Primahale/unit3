// 1. Create an array and use .splice() and .slice() built in array methods on them. Explain the difference in terms of Immutability in comments.


var arr = ["pri","sakshi","praju","kavita"];
arr.splice(1,0,"sonali");
console.log(arr);

// The splice() method changes the content of an array by removing or replacing existing elements and adding new elements from the Array.
// we can pass 1or more than 1 element - i.e (1,0,"sonali") can be represented like this. i.e - at 1st possion we add sonali name.
//  that we added in array.
// we can use splice() for remove item also.



console.log(arr.slice(1,4));

// the slice methode return a new array with copy of a portion with original array.
// the first arrgument is for starting index, and next is for the last index position.
// -------------------------------------------------------------------------------------------------------------------------------------------


// 2. Explain the difference between Object.freeze() and const. Write relevant code and add comments.


var arr = {
    name : "Pri"

};
Object.freeze(arr);
arr.name = "Praju";
console.log(arr.name);

// frozan object cannot be changed. It protect us from adding, changing or deleting properties of an object or array.
// we cannot change in the object and array.
// any change tried it can show TypeError.

const number = 30;
function num(){
    number = 45;
}
function add(){
    number = 52;
}
console.log(number);

// The value of a constant can't be changed through reassignment . when we dont want change the value of that var for that whole program.
// a const variable create refernce to its value.
// A constant cannot share its name with a function or a variable in the same scope.


