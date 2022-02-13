// Функции

// В этом случае приходит строка
// let num = prompt('Введите ваше число');

// В этом случае приходит число

// let num = +prompt('Введите ваше число');
// let num = 39;
// let sum = 0;

// // цикл
// for (let i = 0; i <= num; i++) {
//     if(i % 2 === 0) {
//        sum = sum + i;
//     //    sum += i;
//     }
// }

// console.log('Это сумма четных чисел', sum);

// знать сумму четных чисел всегда!!! в любой момент!


function foo(num) {
    // let num = 39;
    let sum = 0;

    // цикл
    for (let i = 0; i <= num; i++) {
        if(i % 2 === 0) {
        sum = sum + i;
        //    sum += i;
        }
    }
    console.log('сумма четных чисел', sum);
}

foo(220);


for (let i=1; i<21; i=i+1) {
if (i==15) break;
console.log(i);


}
