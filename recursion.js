function  sum(i){
    if(i == 1){
        return 1;
    }
    return i + sum(i - 1);
}
const result = sum(5)
// console.log(result)
function factorial(number){
    if(number == 1){
        return 1;
    }
    return number * factorial(number - 1);
}
const result2 = factorial(5)
console.log(result2)
