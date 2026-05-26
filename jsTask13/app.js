// 3. Tapşırıq
// 1-dən verilən ədədə qədər olan cüt ədədlərin cəmini hesablayan funksiya yaz.

function sumOfEven(num) {
 if (num <= 0) {
    return "Zehmet olmasa 0 dan boyuk eded daxil edin";
  }

  let result = 0;
  for (let i = 2; i <= num; i+=2) {
    result += i;
  }

  return result;
}
console.log(sumOfEven(-6));
