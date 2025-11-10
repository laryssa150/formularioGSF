document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const campos = form.querySelectorAll("input, textarea");

  form.addEventListener("submit", function (event) {
    let formularioValido = true;

    campos.forEach((campo) => {
      if (campo.value.trim() === "") {
        campo.style.border = "2px solid red"; // Borda vermelha para campo vazio
        formularioValido = false;
      } else {
        campo.style.border = "1px solid #ccc"; // Restaura borda padrão
      }
    });

    if (!formularioValido) {
      event.preventDefault(); // Impede envio do formulário
    }
  });
});