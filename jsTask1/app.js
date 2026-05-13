// Task-1 :
// Aşağıdakı kodda nəticənin 30 olması lazımdır, amma proqramçı haradasa səhv edib. Səhvi tapıb tip çevirmə ilə düzəltməlidirər:

// JavaScript
// let qiymet1 = "10";
// let qiymet2 = "20";

// // Səhv olan sətir:
// let cem = qiymet1 + qiymet2; 

// console.log(cem); // Hazırda "1020" çıxır. Necə 30 edək?


let num1 = "10";
let num2 = "20"
// let sum = Number(num1) + Number(num2) (1ci variant)
let sum = +num1 + +num2  //(qisaldilmis variant)

console.log(sum);
