onload = () => {
  document.body.classList.remove("container");
};

document.addEventListener("DOMContentLoaded", function() {
  var boton = document.getElementById("boton");

  boton.addEventListener("click", function() {
    window.location.href = "flowers.html"; // Redirige a siguiente.html
  });
});
