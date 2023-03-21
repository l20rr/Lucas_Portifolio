const icons = document.querySelector('.icons');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let position = 0;

prevButton.addEventListener('click', () => {
  position += 33.33;
  if (position > 0) {
    position = -66.66;
  }
  icons.style.transform = `translateX(${position}%)`;
});

nextButton.addEventListener('click', () => {
  position -= 33.33;
  if (position < -66.66) {
    position = 0;
  }
  icons.style.transform = `translateX(${position}%)`;
});


function abrir(){
  let gameoverlayer = document.getElementById("gameover");
  gameoverlayer.style.position = 'fixed';
  gameoverlayer.style.display = 'flex';

}

function mostrarTexto(titles,texto, imagem, links) {
  var divTexto = document.getElementById("texto");
  abrir();
  divTexto.innerHTML = texto;

  let img = document.querySelector("#conteudo img");
  img.src = imagem + ".jpg";
  

  let link = document.querySelector("#conteudo a");
  link.href = `https://github.com/l20rr/${links}`

  let title = document.getElementById("title") 
  title.innerHTML = titles;
}
function restart() {

  let gameoverlayer = document.getElementById("gameover");
  gameoverlayer.style.display = 'none';
  

}