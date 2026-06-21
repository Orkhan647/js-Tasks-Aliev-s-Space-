// Task1:
// Növbəti maaş gününü hesabla
// Şərtlər:

// Maaş hər ayın 15-i verilir.
// Əgər 15-i həftəsonuna düşərsə, əvvəlki iş günü seçilir

function getNextSalaryDate(today) {
  const salaryDate = new Date(today.getFullYear(), today.getMonth() + (today.getDate() > 15), 15);

  const day = salaryDate.getDay();

  if (day === 6) salaryDate.setDate(salaryDate.getDate() - 1);
  else if (day === 0) salaryDate.setDate(salaryDate.getDate() - 2);

  return salaryDate;
}

let inputDay;

// validation 
while (true) {
  inputDay = +prompt("Günü daxil et (1-31):");

  if (!isNaN(inputDay) && inputDay >= 1 && inputDay <= 31) {
    break;
  }
  alert("Xeta! Günü düzgün yazın");
}

// tarix yarat
const today = new Date();
today.setDate(inputDay);




const date = getNextSalaryDate(today);

if (inputDay === date.getDate()) {
  alert("Bugün maaş gününüzdür! 🎉");
} else {

  const day = date.getDate();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  alert(`Novbeti maas gunu ${day}-${month}-${year}`);
}