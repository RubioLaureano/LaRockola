// Armar este JavaScript fue medio un despelote. Nos estaba costando un montón que la API funcione y muestre las noticias.
// Al principio usamos "XMLHttpRequest" para que actualizara las noticias en las cajitas, pero cuando lo subimos a GitHub Sites
// no nos quería funcionar, así que googleamos un montón y hasta que dimos con "AXIOS" que hace medio lo mismo y sí lo agarra GitHub Sites.
// En resumen: este codigo fue "muy toqueteado" para que finalmente ande bien y creo que quedó muy lindo.

// IMPORTANTE!!! Seguía sin andar en GitHub Sites y no sabíamos por que. Resulta que hoy domingo 21/5 vimos una respuesta en
// Stackoverflow que decía que NewsAPI no permite hacer requests desde el navegador
// por lo que por más cambios que hayamos hecho a este código (pasar de XMLHttpRequest a axios, o etc), NO va a funcionar en GitHub Sites
// ni en ningún lado (probamos mil cosas). La única que nos quedó fue cambiar de API por una que sólo funciona en inglés (La de The Guardian)

// Abajo del todo dejamos la versión previa, la de NewsAPI que sí funciona en español. Pero nos pareció más importante que quede andando en
// GitHub Sites por más que esté en inglés.

var dropdownMenu = document.getElementById("dropdown-menu");
var newsArticles = document.getElementById("news-articles"); // Acá agarramos las dos secciones del HTML por sus id y las almacenamos en variables

dropdownMenu.addEventListener("change", function () {
  // Acá agregamos un event listener al selector
  var selectedTag = dropdownMenu.value; // Acá almacenamos lo que el usuario eligió
  var apiKey = "e1760bc2-ef2d-401b-9d87-149be3f20706"; // Acá guardamos el token de la API en otra variable
  var url = // Esto lo que hace es armar la URL para tirarle la request a The Guardian
    "https://content.guardianapis.com/search?q=" +
    selectedTag +
    " music&section=music&lang=en&api-key=" +
    apiKey +
    "&show-fields=trailText";

  axios // Acá entra AXIOS (que previamente lo teníamos como "XMLHttpRequest") y está buenísimo lo de los objetos "promise"
    .get(url)
    .then(function (response) {
      // Acá empezamos a armar las cajitas cuando el objeto "promise" se "cumple"
      var data = response.data; // Acá el objeto "data" que toma la response
      var articles = data.response.results.slice(0, 3); // Recibe las noticias y selecciona las tres primeras
      var html = ""; // Arma una string vacía (que es lo que vamos a estar llenando acá abajo)
      for (var i = 0; i < articles.length; i++) {
        // Esta es la parte más linda del código, cuando "arma" la section
        html += '<section class="article">'; // Arma una section con clase "article"
        html += "<h2>" + articles[i].webTitle + "</h2>"; // Acá le pega un h2 que contiene el título de la noticia
        html += "<p>" + articles[i].fields.trailText + "</p>"; // Acá le pega el resumen de la noticia
        html += '<a href="' + articles[i].webUrl + '">Leer más</a>'; // Acá arma el hipervínculo a la "source" de la noticia
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

//
// Acá abajo dejamos cómo era el código antes cuando usabamos NewsAPI.org (que tuvimos que dejar de usar porque aparentemente NO funciona en navegadores).
// Técnicamente funciona perfecto si lo reemplazas con el de arriba. Sigue teniendo nuestra API y demás.
//

//var dropdownMenu = document.getElementById("dropdown-menu");
//var newsArticles = document.getElementById("news-articles"); // Acá agarramos las dos secciones del HTML por sus id y las almacenamos en variables

//dropdownMenu.addEventListener("change", function () {
//  // Acá agregamos un event listener al selector
//  var selectedTag = dropdownMenu.value; // Acá almacenamos lo que el usuario eligió
//  var apiKey = "52aa1b254a67401f877c5d029e835ada"; // Acá guardamos el token de la API en otra variable
//  var url =
//    "https://newsapi.org/v2/everything?q=" +
//    selectedTag +
//    " music&language=es&apiKey=" +
//    apiKey; // Esto alo que hace es armar la URL para tirarle la request a NewsAPI

//  axios
//    .get(url) // Acá entra AXIOS (que previamente lo teníamos como "XMLHttpRequest") y está buenísimo lo de los objetos "promise"
//    .then(function (response) {
//      // Acá empezamos a armar las cajitas cuando el objeto "promise" se "cumple"
//      var data = response.data; // Acá el objeto "data"
//      var articles = data.articles.slice(0, 3); // Recibe las noticias y selecciona las tres primeras
//      var html = ""; // Arma una string vacía (que es lo que vamos a estar llenando acá abajo)
//      for (var i = 0; i < articles.length; i++) {
//        // Esta es la parte más linda del código, cuando "arma" la section
//        html += '<section class="article">'; // Arma una section con clase "article"
//        html += "<h2>" + articles[i].title + "</h2>"; // Acá le pega un h2 que contiene el título de la noticia
//        html += "<p>" + articles[i].description + "</p>"; // Acá le pega el copete de la noticia
//        html += '<a href="' + articles[i].url + '">Leer más</a>'; // Acá arma el hipervínculo a la "source" de la noticia
//        html += "</section>"; // Termina de armar la section
//      }
//      newsArticles.innerHTML = html; // Acá hace la magia, que sería actualizar el "news-article" (que está
//      // almacenado en la variable "newsArticles" y muestra por fin las noticias en el html)
//    })
//    .catch(function (error) {
//      // Con catch agarramos los errores que pueda llegar a tener el código al llamar a la API
//      console.error(error); // Y luego los loggea en la consola
//    });
//});
