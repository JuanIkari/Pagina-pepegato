const lol = sessionStorage.getItem("rol");

if (lol === "admin") {
  console.log("Bienvenido admin");
} else if (lol === "user") {
  window.location.href = "index.html";
} else {
  window.location.href = "login.html";
  console.log(lol);
}
