// 2. Tapşırıq
// Verilən ədədin neçə rəqəmdən ibarət olduğunu tapan funksiya yaz.

function findLength(num) {
  if (isNaN(num)) {
    return alert("Herf daxil etmek olmaz")
  }
   let result =  alert( `Daxil etdiyiniz (${number}) ededi ${(num + "").replace("-", "").length}-reqemden ibaretdir`);
   
  return result
  
}

let number = +prompt("Reqem daxil edin");
findLength(number);
