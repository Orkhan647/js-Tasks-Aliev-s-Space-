// 3. ternary operator Tapşırığı — Endirim Hesabı
// Məhsul qiyməti:
// JavaScript
// let price = 120;
// Əgər qiymət 100 və ya daha çoxdursa:
// 20% endirim tətbiq et.
// Əks halda:
// qiyməti dəyişmə.

let price = +prompt("Qiymeti daxil edin:");
let discount = 20;

price =
  price <= 0 || isNaN(price) ? "Yanlis qiymət daxil edilib!.": price >= 100
     ? `Tebrikler endirim aldiniz.Yekun qiymet: ${price - (price * discount) / 100} Azn`
     : `Yekun qiymet: ${price} Azn`;

alert(price);
