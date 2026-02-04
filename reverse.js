// reverse array
const numbers = [25,65,63,78,42,22,58,46];
// numbers.reverse()
// console.log(numbers);


// reverse using for loop 
 const rev_numbers = [];
 for(const num of numbers){
    // rev_numbers.unshift(num)
    
}
// console.log(rev_numbers);
 

/* const revers_num = [];

for(let i = 0; i < numbers.length; i++){
    const nums  = numbers[i];
    revers_num.unshift(nums)
}
console.log(revers_num);
 */

const rev_rev_numbers = [];
for(let i = numbers.length - 1; i >= 0; i--){
    const numss = numbers[i];
    rev_rev_numbers.push(numss)
    
}
console.log(rev_rev_numbers);
