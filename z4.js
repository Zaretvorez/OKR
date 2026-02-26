//Дана строка. Составьте объект, в котором ключи будут гласные буквы строки, а значениями кол-во их вхождений.
//Выведите объект в консоль

const str = "Тут очень важный текст с гласными буквами";

function countGlasn(text) {
    const pattern = "аеёиоуыэюя";
    const result = {};

    const lowerText = text.toLowerCase();

    for (let char of lowerText) {
        if (pattern.includes(char)) {
            if (result[char]) {
                result[char]++;
            } else {
                result[char] = 1;
            }
        }
    }

    return result;
}

console.log(countGlasn(str));