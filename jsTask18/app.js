// Task 2: İki tarix arasındakı gün sayını tap

function getDaysBetweenDates(date1, date2) {
  const differenceInMs = Math.abs(date2 - date1);


  const msInOneDay = 1000 * 60 * 60 * 24;

  const days = Math.ceil(differenceInMs / msInOneDay);

  return days;
}


let dateInput1, dateInput2;
let firstDate, secondDate;

//validation
while (true) {
  dateInput1 = prompt("Birinci tarixi daxil edin (YYYY-MM-DD formatında):");
  firstDate = new Date(dateInput1);

  if (!isNaN(firstDate.getTime())) {
    break;
  }
  alert("Xəta! Tarixi düzgün formatda yazın (Məsələn: 2026-06-15)");
}

// validation 2
while (true) {
  dateInput2 = prompt("İkinci tarixi daxil edin (YYYY-MM-DD formatında):");
  secondDate = new Date(dateInput2);

  if (!isNaN(secondDate.getTime())) {
    break;
  }
  alert("Xəta! Tarixi düzgün formatda yazın (Məsələn: 2026-06-21)");
}


const totalDays = getDaysBetweenDates(firstDate, secondDate);

alert(`İki tarix arasındakı gün sayı: ${totalDays} gün`);