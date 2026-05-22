// Tapşırıq 3: Verilmiş ədədin (məsələn, 17) "sadə ədəd" (yalnız 1-ə və özünə qalıqsız bölünən) olub-olmadığını tapın.

let number;

while (true) {
  number = +prompt("Bir eded daxil eidn");

  if (number > 1) {
    break;
  }

  alert("duzgun eded daxil et (2ve ya yuxari)");
}

let flag = true;

for (let i = 2; i < number; i++) {
  if (number % i === 0) {
    flag = false;
    break;
  }
}

if (flag) {
  alert(`${number} Sade ededdir`);
} else {
  alert(`${number} Sade eded deyil`);
}