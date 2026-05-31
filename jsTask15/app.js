// 2. Maaşdan vergi çıxma
// Funksiya yaz:
// maaş qəbul etsin
// 13% vergi çıx
// net maaşı qaytar

const calculateSalary = (salary) => {

  const calculateTax = (amount) => {

    return amount * 0.13;
  };

  const netSalary = salary - calculateTax(salary);

  return netSalary;
};



let salaryInput = +prompt("Maasinizi daxil edin");

while (isNaN(salaryInput) || salaryInput < 0) {
  alert("Xeta: maasinizi duzgun daxil edin");

  salaryInput = +prompt("Maasinizi daxil edin");
}

let netSalary = calculateSalary(salaryInput);

alert(
  `Maasiniz: ${salaryInput} AZN \nVergiden sonra Maasiniz: ${netSalary} AZN`,
);
