// İstifadəçidən login istəyin.++++++

// Əgər istifadəçi "admin" yazsa:++++

// sonra password soruşulsun.++++

// Password "12345" olsa: ++++

// Admin panelə giriş edildi ++++

// Əks halda:

// Şifrə yanlışdır ++++

// Əgər login səhvdirsə:

// Belə istifadəçi yoxdur ++++

let login = prompt("Login daxil edin");
let password = +prompt("Passwordu daxil et");

(login === "admin" && password === 12345 && alert("admin panele giris edildi")) 
||
  (login === "admin" && password !== 12345 && alert("password yalnisdir")) 
  ||
(login !== "admin" && alert("bele istifadeci yoxdur"));
