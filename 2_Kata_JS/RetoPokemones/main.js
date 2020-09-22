//<!-- As a heading -->
//<nav class="navbar navbar-dark bg-primary">
//  <span class="navbar-brand mb-0 h1">Bandas</span>
//</nav>

//<main class="container">
//  <div class="row" id="card-container">
//  <!-- Aquí van las tarjetas -->
//  </div>
//</main>

// function showCards(band) {
//     console.log(band);
//     // Código para la tarjeta
//     var card = document.createElement('div');
//     card.className = "card col-4";
  
//     // Código para el contenedor
//     var cardContainer = document.getElementById('card-container');
//     cardContainer.appendChild(card);
  
//     // Código para la imagen
//     var img = document.createElement('img');
//     img.className = "card-img-top";
//     img.src = band.img;
//     card.appendChild(img);
  
//     // Código para el card-body
//     var cardBody = document.createElement('div');
//     cardBody.className = "card-body";
  
//     // Código para el título
//     var title = document.createElement('h5');
//     title.className = "card-title";
//     title.innerHTML = band.name;
  
//     // Código de la descripción
//     var descripction = document.createElement('p');
//     descripction.className = "card-text";
//     descripction.innerHTML = band.description;
  
//     card.appendChild(cardBody);
//     cardBody.appendChild(title);
//     cardBody.appendChild(descripction);
//     cardBody.insertAdjacentHTML('beforeend', band.spotify);
//   }
  
//   // console.log(bands);
  
//   for (var i = 0; i < bands.length; i++) {
//     // console.log(bands[i]);
//     showCards(bands[i]);
//   }
  

function showcard (pockemon){

console.log(pockemons);

  var card = document.createElement('div');
  card.className = "card col-3";

  var cardContainer = document.getElementById("card-container");

  cardContainer.appendChild(card);

  var img = document.createElement("img");
  img.className = "card-img-top";
    img.src = pockemon.art_url;
  card.appendChild(img);

  var cardBody = document.createElement("div");
  cardBody.className = "card-body";

  var title = document.createElement("h4");
  title.className = "card-title";
  title.innerHTML = pockemon.name;

  var descripcion = document.createElement("p");
  descripcion.className = "card-text text-justify text-sm ";
  descripcion.innerHTML = pockemon.description;

  card.appendChild(cardBody);
  cardBody.appendChild(title);
  cardBody.appendChild(descripcion);
}  


for (let index = 0; index < pockemons.length; index++) {
    var element = pockemons[index];
    showcard(pockemons[index]);
}