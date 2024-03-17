let arr = [
[1, 5, 3, 10],
[2, 8, 4, 7]
];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        sum += arr[i][j]** 2;
    }
}

console.log("Сумма квадратов элементов заданного массива = ", sum);
