const persons = ["rakib","nokib","sakib","dakib"];
const sortedPersons = persons.sort();
console.log(sortedPersons);


const numbers = [4,5,3,55,2,34,8];
const numbers_ass = [...numbers].sort(function(a,b){
    return a - b;
});
const numbers_dss = [...numbers].sort(function(a,b){
    return b - a;
});
console.log(numbers_ass);
console.log(numbers_dss);
