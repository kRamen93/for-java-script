/* 

1. создать переменную array и поместить в нее пустой массив
2. Далее в этот массив поместить 5 марок автомобилей
3. вывести эти машины в консоль с помощью цикла FOR
4. создать переменную object 
5. поместить в переменную object 3 ключа со значениями 
имя, фамилия, возраст ваших однокласниц любых
6. вывести в консоль только фамилию
7. создать функцию которая выводит в консоль числа от 
3 до 13 с помощью цикла for
8. создать массив с числами от 1 до 9 и перевернуть его 
тоесть внутри массива чтобы числа стали от 9 до 1


*/

let array = [];

array.push('bmw')
array.push('porshe')
array.push('mersedes')
array.push('audi')
array.push('kia')

for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

let koko = {
    name: 'Sanya',
    surname: 'Igrova',
    age: 1,
}

console.log(koko.surname);

let kokoko = {
    1: {
        name: 'Sasha',
        surname: 'Petrova',
        age: 13,
    },
    2: {
        name: 'Olga',
        surname: 'Ivanova',
        age: 14,
    },
    3: {
        name: 'Yula',
        surname: 'Sidorova',
        age: 12,
    }
}

console.log(kokoko[1].surname);
console.log(kokoko[2].surname);
console.log(kokoko[3].surname);

function foo() {
    for (let i = 3; i <= 13; i++) {
        console.log(i);
    }
}
foo()

let arr = [1,2,3,4,5,6,7,8,9]
let arr2 = [...arr].reverse()

console.log(arr);
console.log(arr2);

function ree (a,b){
console.log(a+b);




}
ree(15,10)








