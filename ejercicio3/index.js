const users = [
  {
    name: "John Doe",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    img: "https://randomuser.me/api/portraits/men/38.jpg",
  },
  {
    name: "Jane Doe",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    img: "https://randomuser.me/api/portraits/women/74.jpg",
  },
  {
    name: "John Smith",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jane Smith",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    img: "https://randomuser.me/api/portraits/women/92.jpg",
  },
];

const fragment = document.createDocumentFragment();
const template = document.querySelector("template");
const container = document.querySelector(".container");

users.forEach(({ name, description, img }) => {
  const imgCard = template.content.querySelector("img");
  const descriptionCard = template.content.querySelector("p");
  const nameCard = template.content.querySelector("h2");

  imgCard.src = img;
  descriptionCard.textContent = description;
  nameCard.textContent = name;

  const clone = template.cloneNode(true);

  fragment.append(clone.content);
});

container.append(fragment);
