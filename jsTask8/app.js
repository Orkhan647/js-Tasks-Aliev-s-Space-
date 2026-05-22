// Tapşırıq 1: let soz = "Proqramlasdirma" string-i verilib. Bu sözün içində
// neçə dənə "r" hərfi olduğunu tapıb konsola çap edən dövr qurun.

let word = "Proqramlasdirma";
let count= 0
let targetLetter = "r"
for (let i = 0; i < word.length; i++) {

    if(word[i] === targetLetter){
      count++
    }
}
console.log(`verilen stringin icinde -${count}- eded (${targetLetter}) herfi var`);
