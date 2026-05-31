// 1. Nested Function – Stipendiya hesabla
// Funksiya yaz:
// tələbənin ortalama balını qəbul etsin
// daxili funksiya faiz hesablasın
// 80+ bal → "Stipendiya qazanır"
// əks halda → "Qazana bilmir"

const stipend = () => {
  let score;

  while (true) {
    score = +prompt("Balinizi daxil edin");

    if (isNaN(score)) {
      alert("Xeta! Bali duzgun daxil edin");
    } else if (score < 0 || score > 100) {
      alert("Bal 0-100 arasi olmalidir");
    } else {
      break;
    }
  }

  const check = (grade) => {
    return grade >= 80
      ? "Tebrikler! Stipendiya qazandiniz"
      : "Teessuf olsun ki, stipendiya qazana bilmediniz";
  };

    alert(`Baliniz: ${score}\nNetice: ${check(score)}`);
};

stipend();
