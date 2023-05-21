// Armar este JavaScript fue medio un despelote. Nos estaba costando un montón que la API funcione y muestre las noticias.
// Al principio usamos "XMLHttpRequest" para que actualizara las noticias en las cajitas, pero cuando lo subimos a GitHub Sites
// no nos quería funcionar, así que googleamos un montón y hasta que dimos con "AXIOS" que hace medio lo mismo y sí lo agarra GitHub Sites.
// En resumen: este codigo fue "muy toqueteado" para que finalmente ande bien y creo que quedó muy lindo.

var dropdownMenu = document.getElementById("dropdown-menu");
var newsArticles = document.getElementById("news-articles"); // Acá agarramos las dos secciones del HTML por sus id y las almacenamos en variables

dropdownMenu.addEventListener("change", function () {
  // Acá agregamos un event listener al selector
  var selectedTag = dropdownMenu.value; // Acá almacenamos lo que el usuario eligió
  var apiKey = "52aa1b254a67401f877c5d029e835ada"; // Acá guardamos el token de la API en otra variable
  var url =
    "http://newsapi.org/v2/everything?q=" +
    selectedTag +
    " music&language=es&apiKey=" +
    apiKey; // Esto alo que hace es armar la URL para tirarle la request a NewsAPI

  axios
    .get(url) // Acá entra AXIOS (que previamente lo teníamos como "XMLHttpRequest") y está buenísimo lo de los objetos "promise"
    .then(function (response) {
      // Acá empezamos a armar las cajitas cuando el objeto "promise" se "cumple"
      var data = response.data; // Acá el objeto "data"
      var articles = data.articles.slice(0, 3); // Recibe las noticias y selecciona las tres primeras
      var html = ""; // Arma una string vacía (que es lo que vamos a estar llenando acá abajo)
      for (var i = 0; i < articles.length; i++) {
        // Esta es la parte más linda del código, cuando "arma" la section
        html += '<section class="article">'; // Arma una section con clase "article"
        html += "<h2>" + articles[i].title + "</h2>"; // Acá le pega un h2 que contiene el título de la noticia
        html += "<p>" + articles[i].description + "</p>"; // Acá le pega el copete de la noticia
        html += '<a href="' + articles[i].url + '">Leer más</a>'; // Acá arma el hipervínculo a la "source" de la noticia
        html += "</section>"; // Termina de armar la section
      }
      newsArticles.innerHTML = html; // Acá hace la magia, que sería actualizar el "news-article" (que está
      // almacenado en la variable "newsArticles" y muestra por fin las noticias en el html)
    })
    .catch(function (error) {
      // Con catch agarramos los errores que pueda llegar a tener el código al llamar a la API
      console.error(error); // Y luego los loggea en la consola
    });
});
