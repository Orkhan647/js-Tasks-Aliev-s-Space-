const orderForm = document.getElementById("orderForm");

const fields = [
  {
    input: document.getElementById("product"),
    error: document.getElementById("product-error"),
  },
  {
    input: document.getElementById("quantity"),
    error: document.getElementById("quantity-error"),
  },
  {
    input: document.getElementById("delivery-date"),
    error: document.getElementById("delivery-date-error"),
  },
  {
    input: document.getElementById("name"),
    error: document.getElementById("name-error"),
  },
  {
    input: document.getElementById("email"),
    error: document.getElementById("email-error"),
  },
  {
    input: document.getElementById("phone"),
    error: document.getElementById("phone-error"),
  },
  {
    input: document.getElementById("terms"),
    error: document.getElementById("terms-error"),
    isCheckbox: true,
  },
];

const [
  productXana,
  quantityXana,
  dateXana,
  nameXana,
  emailXana,
  phoneXana,
  termsXana,
] = fields;

// 1. input check
fields.forEach(function (xana) {
  xana.input.addEventListener("blur", function () {
    let bosdur = xana.isCheckbox
      ? xana.input.checked === false
      : xana.input.value === "";

    if (bosdur) {
      xana.error.style.display = "block";
    } else {
      xana.error.style.display = "none";
    }
  });
});

// 2. submit check
orderForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let formDüzgündür = true;

  fields.forEach(function (xana) {
    let bosdur = xana.isCheckbox
      ? xana.input.checked === false
      : xana.input.value === "";

    if (bosdur) {
      xana.error.style.display = "block";
      formDüzgündür = false;
    } else {
      xana.error.style.display = "none";
    }
  });

  //delivery time check
  const secilenSaat = document.querySelector(
    'input[name="delivery_time"]:checked',
  );
  const timeError = document.getElementById("time-error");

  if (secilenSaat === null) {
    timeError.style.display = "block";
    formDüzgündür = false;
  } else {
    timeError.style.display = "none";
  }

  if (formDüzgündür === true) {
    if (confirm("Sifaris etmek ucun eminsiniz?")) {
      alert("Sifarisiniz ugurla qebul edildi!");

      let commentValue = document.getElementById("comments").value;

      let order = {
        product: productXana.input.value,
        quantity: quantityXana.input.value,
        deliveryDate: dateXana.input.value,
        deliveryTime: secilenSaat.value,
        nameField: nameXana.input.value,
        email: emailXana.input.value,
        phone: phoneXana.input.value,
        comments: commentValue === "" ? "no comment" : commentValue,
        terms: termsXana.input.checked,
      };

      console.log("Gonderilen sifaris:", order);
      orderForm.reset();
    }
  }
});
