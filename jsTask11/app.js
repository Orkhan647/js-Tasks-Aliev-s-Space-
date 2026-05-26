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



