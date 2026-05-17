// 1. if...else Tapşırığı — İmtahan Nəticəsi
// İstifadəçidən bal daxil et (0-100) və nəticəyə görə qiymət çıxart:
// 90+ → A
// 75-89 → B
// 60-74 → C
// 40-59 → D
// 0-39 → F
// Əgər bal düzgün deyilsə → "Yanlış bal daxil edilib"

let bal = +prompt("0-100 arasi balinizi daxil edin")

if(bal >= 90 && bal <= 100){
    alert("sizin baliniz 'A'")
}
else if(bal >= 75 && bal <= 89){
    alert("sizin baliniz'B'");
    
}
else if(bal >= 60 && bal <= 74){
    alert("sizin baliniz 'C'")
}
else if(bal >= 40 && bal <= 59){
    alert("sizin baliniz 'D'")
}
else if( bal >= 0 && bal <=39){
    alert("sizin baliniz 'F'")
}
else{
    alert("Balinizi duzgun daxil etmemisiniz")
}