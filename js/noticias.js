var dropdownMenu = document.getElementById('dropdown-menu');
var newsArticles = document.getElementById('news-articles');

dropdownMenu.addEventListener('change', function() {
  var selectedTag = dropdownMenu.value;
  var apiKey = '52aa1b254a67401f877c5d029e835ada'; 
  var url = 'https://newsapi.org/v2/everything?q=' + selectedTag + ' music&language=es&apiKey=' + apiKey; // Acá a la API le decimos que nos de "everything" dentro de la categoría MUSICA, y que nos lo de en español

  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = function() {
    var data = JSON.parse(request.responseText);
    var articles = data.articles.slice(0, 3); // Acá le decimos que nos de los primeros tres articulos
    var html = '';
    for (var i = 0; i < articles.length; i++) {
      html += '<section class="article">';
      html += '<h2>' + articles[i].title + '</h2>';
      html += '<p>' + articles[i].description + '</p>';
      html += '<a href="' + articles[i].url + '">Leer más</a>'; // Acá el hipervínculo a la noticia
      html += '</section>';
    }
    newsArticles.innerHTML = html;
  };
  request.send();
});
