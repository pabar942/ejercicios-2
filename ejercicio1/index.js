const image = document.createElement("img");
const divApp = document.querySelector(".app");
image.src = "https://via.placeholder.com/150";
image.alt = "Imagen de ejemplo";

//insertar la imagen al final
// divApp.append(image);

//insertar la imagen al principio
// divApp.prepend(image);

//insertar la imagen entre los dos párrafos
const parrafos = document.querySelectorAll("p");
divApp.insertBefore(image, parrafos[parrafos.length - 1]);
