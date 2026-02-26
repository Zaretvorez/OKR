//Напишите скрипт на JS который выводит в консоль факториал числа 7

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

console.log('Факториал 7 равен:', factorial(7));