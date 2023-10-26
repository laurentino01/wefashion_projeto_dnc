document.querySelector(".hamburger").addEventListener("click", function () {
  const menu = document.querySelector(".menu");
  menu.style.display = menu.style.display === "none" ? "flex" : "none";
});

function matricular() {
  const url =
    "https://api.whatsapp.com/send?phone=5512988880301&text=Ol%C3%A1!%20Gostaria%20de%20me%20matricular%20em%20um%20de%20seus%20cursos.%20";
  window.open(url, "_blank").focus();
}
