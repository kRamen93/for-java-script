let vegetables = [];


vegetables.push('potato');
vegetables.push('cucmber');
vegetables.push('lettuce');
vegetables.push('carrot');
vegetables.push('radish');
vegetables.push('pumkin');
vegetables.push('cabage');

vegetables.unshift('zkjrj');
vegetables.unshift('vjhrjdm');
vegetables.unshift('dfghg');
vegetables.unshift('fdghs');
vegetables.unshift('gshg65');

vegetables.pop();
vegetables.shift();


console.log(vegetables);

let word = 'anna';
let word2 = 'oleg';

function palindrom(str) {

let a =str.split('');
let b= a.reverse();
let c = b.join('');
console.log(c);
return c;


}

console.log(palindrom(word2));

let arr = [1,2,3,4,5,6] 
console.log(arr);
console.log(arr.join());









for(let num of arr) {
    console.log(num);
}