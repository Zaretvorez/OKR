//Добавить обработку нажатия клавиши: Отображайте на экране строку, в которой все пробелы
//заменяються на подчеркивания в реальн времени(не юзая инпуты)

let result = "";
const output = document.createElement("div");
document.body.appendChild(output);

document.addEventListener("keydown", function (event) {
    if (event.key.length === 1) {
        if (event.key === " ") {
            result += "_";
        } else {
            result += event.key;
        }
    }
    else if (event.key === "Backspace") {
        result = result.slice(0, -1);
    }
    output.textContent = result;
});