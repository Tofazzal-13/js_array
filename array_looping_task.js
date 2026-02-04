// task 1

/* const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const newColors = [];

for(let color of colors){
    console.log(color);
    newColors.unshift(color)
}
console.log(newColors); */



// task 2

/* const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNumbers = [];

for(let number of numbers){
    if(number % 2 === 0){
        evenNumbers.push(number)
    }
}

console.log(evenNumbers); */


// task 3

var array = ['Tom', 'Tim', 'Tin', 'Tik'];
let result = "";
for(let arr of array){
    // console.log(arr);
    result += arr;
}
// console.log(result);


// task 4
const statement = 'I am a hard working person';

const splitStatement = statement.split(" ");

let newStatement = []

for(let splitS of splitStatement){
     newStatement.unshift(splitS) 
}

const newSentence = newStatement.join(" ")
// console.log(newSentence);

// task 5

const input = [1,2,3];
const newInput = [...input]
newInput[0] = 99
console.log("Orginal:",input,"Copy:",newInput);



    







