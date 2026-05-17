// 2. switch case Tapşırığı — Fəsilə görə Aylar
// İstifadəçidən fəsil daxil et:
// "yay" → İyun, İyul, Avqust
// "qış" → Dekabr, Yanvar, Fevral
// "yaz" → Mart, Aprel, May
// "payız" → Sentyabr, Oktyabr, Noyabr
// Əgər səhv daxil edilərsə:
// JavaScript
// "Belə fəsil yoxdur"


let fesiller = prompt("Fesil daxil edin 'yaz/yay/payiz/qis")

switch(fesiller){
    case "yaz" : alert("Mart, Aprel, May") ; break;
    case "yay" : alert("İyun, İyul, Avqust") ; break;
    case "payiz" : alert("Sentyabr, Oktyabr, Noyabr") ; break;
    case "qis" : alert("Dekabr, Yanvar, Fevral") ; break;
    default : alert("Bele Fesil Yoxdur (Duzgun daxil et)")

}

