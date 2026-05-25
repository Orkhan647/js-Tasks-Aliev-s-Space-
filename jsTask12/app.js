// 2. Tapşırıq
// Verilən ədədin neçə rəqəmdən ibarət olduğunu tapan funksiya yaz.

function findLength(num) {
  if (isNaN(num)) {
    return "Herf daxil etmek olmaz";
  }

  return alert(
    `Daxil etdiyiniz (${number}) ededi ${(num + "").replace("-", "").length}-reqemden ibaretdir`,
  );
}

let number = +prompt("Reqem daxil edin");
findLength(number);
