function edediTersCevir(number) {
    if (number < 0) {
        return "Xəta: Mənfi ədəd daxil edilə bilməz!";
    }

    let numberToStr = String(number);
    let reverseStr = "";

    for (let i = numberToStr.length - 1; i >= 0; i--) {
        reverseStr += numberToStr[i];
    }

    return reverseStr; 
}

let number = +prompt("eded daxil edin");
let netice = edediTersCevir(number);


alert(`Ters eded: ${netice}`);  

// sonu sifirla biten ededlerin (meselen, 120-nin tersi olan 021-in) ondeki sifirini qorumaq ucun
//  funksiyadan temiz eded yox, String qaytaririq. cunki riyazi olaraq ededin onunde sifir qala bilmez.

