let str = prompt("Поле ввода: ");
let result = " ";

for (let i = str.length - 1; i >= 0; i -= 2) {
    result += str[i];
}

console.log(result);