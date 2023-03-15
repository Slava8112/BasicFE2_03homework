// 1)Написать функцию, которая получает в качестве аргумента число и строку, где число обозначает сколько раз должна быть добавлена эта строка в объект. Возвращает массив из этих строк. Например: передаем строку “dog” и цифру 3, в результате мы получаем {"dog0" : "dog0", "dog1": "dog1", "dog2": "dog2"}.

function objString(number, string) {
    let obj = {};
    for (let i = 0; i < number;i++) {
        obj[i]=`${string}${i}`+':';
        obj[i] +=string+i;
    }
    return obj;
}
console.table(objString(3,"dog",));

// 2)Написать функцию, которая получает в качестве аргумента массив. для расчета суммы четных чисел в массиве. Так же написать  новую функцию для расчета суммы нечетных чисел в массиве. 
// Написать функцию, которая принимает как аргумент две полученные суммы и выводит наибольшее из них.

// const evenNumbers = [1,2,3,4,5,6];
// function even(numbers){
//    let evenSum = 0;
//     for (let i = 0; i < evenNumbers.length; i++){
//         if(evenNumbers[i] % 2==0){
//         evenSum +=evenNumbers[i];
//         }
//     }
//     console.log(evenSum);
//     return evenSum;
// }
// even();

//     const oddNumbers = [1,2,3,4,5,6];
//     function odd(numbers){
//        let oddSum = 0;
//         for (let i = 0; i <oddNumbers.length; i++){
//             if(oddNumbers[i] % 2 !=0){
//             oddSum +=oddNumbers[i];
//             }
//         }
//         console.log(oddSum);
//         return oddSum;
//     }
// odd();
// // console.log(even()+odd());

// function comprasion(){
//     if(odd()>even()){
//     console.log('наибольшее нечетное '+odd());
//     }else{
//         (odd()<even());
//         console.log('наибольшее четное '+even());
//     }
// }
// comprasion();

// 3)Напишите функцию для преобразования градусов Цельсия в градусы Фаренгейта. (Например: console.log(function(0)) => 32);

// function conversion(tc){
// let tf =tc*9/5+32;
// console.log(tf);
// }
// conversion(36,6);

// 4)Написать функцию, которая будет находить максимальное число в массиве.

// const numbers = [13, 4, 11, 333, 5, 22, 7];
// function maxValue(){
// let max = numbers[0];
// for (const item of numbers) {
//   if(item > max) {
//     max = item;
//   }
// }
// return max;
// }
// console.log(maxValue());

// 5)написать функцию, которая будет находить минимальное число в массиве.


// const numbers = [13, 4, 11, -33, 5, 22, 7];
// function minValue(){
// let min = numbers[0];
// for (const item of numbers) {
//   if(item < min) {
//     min = item;
//   }
// }
// return min;
// }
// console.log(minValue());
