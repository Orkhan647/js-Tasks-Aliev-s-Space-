// 3. Endirim sistemi
// Funksiya yaz:
// alış-veriş məbləği qəbul etsin
// 100+ → 10% endirim
// 200+ → 20% endirim
// nəticə: ödəniləcək məbləğ

let discount = (amount) => {
  if (amount >= 200) {
    return amount * 0.8;
  } else if (amount >= 100) {
    return amount * 0.9;
  }
  return amount;
};
let amount;

while (true) {
  amount = +prompt("Meblegi daxil edin");


  if (isNaN(amount) || amount<=0) {
      alert("Xeta: yanlis mebleg yeniden daxil edin");
   
  }else{
    break;
  }
}

alert(`Odenilecek mebleg ${discount(amount)} AZN`);
