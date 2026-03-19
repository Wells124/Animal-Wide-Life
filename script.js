function showFact(animal) {
  const facts = {
    tiger: "Tigers are critically endangered due to habitat loss and poaching. Only about 3,900 remain in the wild.",
    seaTurtle: "Sea turtles face threats from plastic pollution and climate change. Six of seven species are endangered.",
    panda: "Giant pandas were once endangered, but conservation efforts have improved their status to vulnerable.",
    elephant: "African elephants are threatened by poaching for ivory and habitat loss. Populations have declined sharply.",
    polarBear: "Polar bears depend on sea ice, which is shrinking due to climate change. They are classified as vulnerable.",
    orangutan: "Orangutans are endangered due to deforestation and palm oil plantations destroying their rainforest homes.",
    blueWhale: "Blue whales are the largest animals on Earth. They were nearly hunted to extinction but remain endangered."
  };

  document.getElementById("fact-box").innerText = facts[animal];
}

// Toggle mobile menu
function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("show");
}
