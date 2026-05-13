// Task 2:

// Aşağıdakı dəyişənləri yaratmalı və hesablamalar aparmalıdır:

// mehsulAdi (String)

// mehsulQiymeti (Number)

// endirimFaizi (Number - məsələn, 20)

// stokdaVarmi (Boolean)

// Tapşırıq:

// Məhsulun endirimli qiymətini hesablayıb yeni bir dəyişənə mənimsədin.

// Konsola belə bir cümlə çıxarın: "Məhsul: [ad], Endirimli Qiymət: [qiymət] AZN". ++++

// Məhsulun qiyməti 50-dən yuxarıdırsa və stokda varsa, konsola true çıxaran bir məntiq yazın. ++++

let productName = "Laptop";
let productPrice = 900;
let discount = 25;
let inStock = true;
let discountedPrice = productPrice -(productPrice *discount/100);
let isValid = productPrice>50 && inStock
console.log(`Məhsul: ${productName} , Endirimli Qiymət: ${discountedPrice} AZN`,isValid);
