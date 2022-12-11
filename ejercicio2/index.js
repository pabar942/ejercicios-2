const animals = [
  { name: "Lion King", isCarnivore: true },
  { name: "Plant", isCarnivore: false },
  { name: "Ant", isCarnivore: true },
  { name: "Bee", isCarnivore: true },
  { name: "Mouse", isCarnivore: true },
];

const fragment = document.createDocumentFragment();

const carnivoros = document.createElement("ul");
const herviboros = document.createElement("ul");

animals.forEach(({ name, isCarnivore }) => {
  const item = document.createElement("li");
  item.textContent = name;
  if (isCarnivore) {
    item.textContent += "🍖";
    item.classList.add("carnivore");
    carnivoros.append(item);
  } else {
    item.textContent += "🌱";
    item.classList.add("hervibore");
    herviboros.append(item);
  }
});

fragment.append(carnivoros, herviboros);

document.body.append(fragment);
