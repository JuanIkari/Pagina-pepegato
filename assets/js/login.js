document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const usuario = document.querySelector("#usuario").value;
    const contraseña = document.querySelector("#contraseña").value;

    console.log("Usuario: " + usuario);
    console.log("Contraseña: " + contraseña);

    fetch("../data/users.json")
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].user == usuario && data[i].password == contraseña) {
            sessionStorage.setItem("id", data[i].userId);
            sessionStorage.setItem("user", data[i].user);
            sessionStorage.setItem("rol", data[i].rol);
            if (data[i].rol == "admin") {
              window.location.href = "admin.html";
            } else if (data[i].rol == "user") {
              window.location.href = "index.html";
            }
          }
        }
      });
  });
});
