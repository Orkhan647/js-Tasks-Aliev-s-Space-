// Tapşırıq 2 : let cumle = "Bu gun hava cox gozeldir" string-i verilib. Dövr vasitəsilə içindəki bütün
//  boşluqları silərək tamamilə bitişik yeni bir string ("Bugunhavacoxgozeldir") yaradın.

let text = "Bu gun hava cox gozeldir";
let result = "";

for (let i = 0; i < text.length; i++) {
  
    if(text[i] !== " "){
        result+=text[i]
    }

}
console.log(result);
