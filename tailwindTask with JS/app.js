const container = document.querySelector(".container");

document.body.className = "m-0 p-0 overflow-x-hidden";

/* ================= HEADER ================= */

const header = document.createElement("header");
header.className =
  "max-w-[1440px] mx-auto px-6 md:px-12 py-6 flex items-center justify-between";

const logoWrapper = document.createElement("div");
logoWrapper.className = "flex items-center gap-3";

const logo = document.createElement("img");
logo.src = "./assets/logo.png";
logo.alt = "Logo";
logo.className = "h-8 md:h-10";

const logoText = document.createElement("h2");
logoText.textContent = "Furniro";
logoText.className = "text-2xl md:text-3xl font-bold";

logoWrapper.append(logo, logoText);

const nav = document.createElement("nav");
nav.className = "hidden md:flex items-center gap-14 font-medium";

const links = ["Home", "Shop", "About", "Contact"];

links.forEach((item) => {
  const a = document.createElement("a");
  a.href = "#";
  a.textContent = item;
  a.className = "hover:text-[#B88E2F] transition";
  nav.append(a);
});

const icons = document.createElement("div");
icons.className = "flex items-center gap-4 md:gap-6 text-lg";

const iconsData = [
  "fa-regular fa-user",
  "fa-solid fa-magnifying-glass",
  "fa-regular fa-heart",
  "fa-solid fa-cart-shopping",
];

iconsData.forEach((iconClass) => {
  const icon = document.createElement("i");
  icon.className = `${iconClass} cursor-pointer hover:text-[#B88E2F] transition`;
  icons.append(icon);
});

header.append(logoWrapper, nav, icons);

/* ================= HERO ================= */

const hero = document.createElement("section");
hero.className =
  "w-screen h-[500px] md:h-[716px] bg-cover bg-center relative overflow-hidden";

hero.style.backgroundImage = "url('./assets/backround.png')";

const overlay = document.createElement("div");
overlay.className =
  "absolute inset-0 flex items-center justify-center md:justify-end px-4 md:px-20";

const card = document.createElement("div");
card.className =
  "bg-[#FFF3E3] w-full max-w-[643px] p-6 md:p-14 rounded-md";

const subTitle = document.createElement("p");
subTitle.textContent = "New Arrival";
subTitle.className =
  "uppercase tracking-[3px] text-xs md:text-sm font-semibold mb-3";

const title = document.createElement("h1");
title.textContent = "Discover Our New Collection";
title.className =
  "text-3xl md:text-[52px] font-bold text-[#B88E2F] leading-tight mb-5";

const desc = document.createElement("p");
desc.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.";
desc.className =
  "text-gray-700 text-sm md:text-lg leading-relaxed mb-8";

const btn = document.createElement("button");
btn.textContent = "BUY NOW";
btn.className =
  "bg-[#B88E2F] text-white px-8 md:px-16 py-3 md:py-5 font-semibold hover:opacity-90 transition cursor-pointer";

card.append(subTitle, title, desc, btn);

overlay.append(card);
hero.append(overlay);



container.append(header, hero);