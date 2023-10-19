document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const usuario = document.querySelector("#usuario").value;
    const contraseña = document.querySelector("#contraseña").value;
  
    console.log("Usuario: " + usuario);
    console.log("Contraseña: " + contraseña);
  });