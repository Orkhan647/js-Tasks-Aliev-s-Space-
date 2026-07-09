const xhr = new XMLHttpRequest();

const BASE_URL = "https://rickandmortyapi.com/api";
const container = document.getElementById("cards");

xhr.open("GET", `${BASE_URL}/character`);

xhr.addEventListener("readystatechange", function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);

    data.results.forEach((character) => {
      // Card
      const card = document.createElement("div");
      card.className =
        "flex bg-[#3c3e44] rounded-xl overflow-hidden text-white";

      // Image
      const img = document.createElement("img");
      img.src = character.image;
      img.alt = character.name;
      img.className = "w-56 h-56 object-cover";

      // Right Side
      const info = document.createElement("div");
      info.className = "p-5 flex flex-col gap-4";

      // Name
      const name = document.createElement("a");
      name.target = "_blank";
      name.href = `https://rickandmortyapi.com/api/character/${character.id}`;
      name.textContent = character.name;
      name.className =
        "text-3xl font-bold hover:text-orange-400 duration-300";

      // Status
      const status = document.createElement("div");
      status.className = "flex items-center gap-2";

      const dot = document.createElement("span");

      if (character.status === "Alive") {
        dot.className = "w-3 h-3 rounded-full bg-green-500";
      } else if (character.status === "Dead") {
        dot.className = "w-3 h-3 rounded-full bg-red-500";
      } else {
        dot.className = "w-3 h-3 rounded-full bg-gray-400";
      }

      const statusText = document.createElement("span");
      statusText.textContent = `${character.status} - ${character.species}`;
      statusText.className = "font-semibold";

      status.append(dot, statusText);

      // Last known location
      const locationTitle = document.createElement("p");
      locationTitle.textContent = "Last known location:";
      locationTitle.className = "text-gray-400";

      const location = document.createElement("a");
      location.target = "_blank"
      location.href = character.location.url;
      location.textContent = character.location.name;
      location.className =
        "text-xl hover:text-orange-400 duration-300";

      // First seen in
      const firstTitle = document.createElement("p");
      firstTitle.textContent = "First seen in:";
      firstTitle.className = "text-gray-400";

      const firstSeen = document.createElement("a");
      firstSeen.target= "_blank"
      firstSeen.href = character.episode[0];
      firstSeen.textContent = character.origin.name;
      firstSeen.className =
        "text-xl hover:text-orange-400 duration-300";

      info.append(
        name,
        status,
        locationTitle,
        location,
        firstTitle,
        firstSeen
      );

      card.append(img, info);
      container.append(card);
    });
  }
});

xhr.send();