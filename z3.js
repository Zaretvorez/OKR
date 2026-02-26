//Функция принимает массив объектов вида {product: '...', price: ...} и возвращает среднюю цену 
//всех товаров. Резултат вывести с помощью console.log()

const tovar = [
    { product: 'Apple', price: 4999 },
    { product: 'Xiaomi 3000 super ultra max', price: 3999 },
    { product: 'Жигуль', price: 700 }
];

function getAveragePrice(products) {
    if (products.length === 0) return 0;

    let total = 0;

    for (let item of products) {
        total += item.price;
    }

    return total / products.length;
}

console.log(getAveragePrice(tovar));