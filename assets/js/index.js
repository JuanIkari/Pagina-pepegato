const getNoticias = async () => {
  const data = await fetch("../data/news.json");
  const noticias = await data.json();
  let news = document.querySelector("#news");

  noticias.forEach((element) => {
    news.innerHTML += `
    <article class = "noticias">

        <header>
          <h3 class="titulo-noticias">${element.title}</h3>
        </header>
        <figure>
          <img src="assets/images/${element.image}" alt=""  width="320" height="100"/>
          <figcaption class="resumen">${element.description}</figcaption>
        </figure>
        <footer class="noticias-foot">
          <a href="${element.link}" class="link" target="_blank" >Leer noticia completa</a>
          <p class="publi">Publicado: 04-09-2023</p>
        </footer>

    </article> 
    `;
  });
};

getNoticias();
