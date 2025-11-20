const retroCursor = document.querySelector(".retro-cursor");
const instaPopup = document.querySelector(".cursor-instagram");

let idleTimer;
let isIdle = false;

document.addEventListener("mousemove", (e) => {
  // mover el cursor retro
  retroCursor.style.left = e.clientX + "px";
  retroCursor.style.top = e.clientY + "px";

  // mover popup instagram si visible
  if (isIdle) {
    instaPopup.style.left = e.clientX + 20 + "px";
    instaPopup.style.top = e.clientY + 20 + "px";
  }

  // si el usuario mueve, ocultar popup
  instaPopup.classList.remove("visible");
  isIdle = false;

  // Reiniciar el contador de inactividad
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => {
    // Mostrar Instagram
    instaPopup.style.left = e.clientX + 20 + "px";
    instaPopup.style.top = e.clientY + 20 + "px";
    instaPopup.classList.add("visible");
    isIdle = true;
  }, 2000); // ⏳ 2 segundos sin mover
});

