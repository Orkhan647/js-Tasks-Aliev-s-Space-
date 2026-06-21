// Task 2: Calculate days between two dates

function getDays(date1, date2) {
  const diff = Math.abs(date2 - date1);

  const dayInMs = 24 * 60 * 60 * 1000; 
  
  const days =Math.floor(diff / dayInMs);
  return days;
}

let input1, input2;
let startDate, endDate;

// Validate first date
while (true) {
  input1 = prompt("1-ci tarixi daxil et (YYYY-MM-DD):");
  startDate = new Date(input1);

  if (!isNaN(startDate.getTime())) {
    break;
  }
  alert("Xeta: tarixi duzgun yaz meselken: 2026-06-15");
}

// Validate second date
while (true) {
  input2 = prompt("2-ci tarixi daxil et (YYYY-MM-DD):");
  endDate = new Date(input2);

  if (!isNaN(endDate.getTime())) {
    break;
  }
  alert("Xeta: tarixi duzgun yaz meselken: 2026-06-21");
}

const result = getDays(startDate, endDate);

alert(`umumi gun ferqi: ${result} gun`);