// 1. Nested Function – Stipendiya hesabla
// Funksiya yaz:
// tələbənin ortalama balını qəbul etsin
// daxili funksiya faiz hesablasın
// 80+ bal → "Stipendiya qazanır"
// əks halda → "Qazana bilmir"

const stipend = () => {
  const totalScore = 700;

  let studentScore;

  while (true) {
    studentScore = +prompt(`Balinizi daxil edin (0-${totalScore})`);

    if (isNaN(studentScore)) {
      alert("Xeta! Bali duzgun daxil edin");
    } else if (studentScore < 0 || studentScore > totalScore) {
      alert(`Bal 0-${totalScore} arasi olmalidir`);
    } else {
      break;
    }
  }

  const averagePercent = Math.floor((studentScore / totalScore) * 100);

  const check = (percent) => {
    return percent >= 80
      ? "Tebrikler! Stipendiya qazandiniz"
      : "Teessuf olsun ki, stipendiya qazana bilmediniz";
  };

  alert(
    `Sizin baliniz: ${studentScore}
Faiz gostericiniz: ${averagePercent}%
Netice: ${check(averagePercent)}`,
  );
};

stipend();
