

/*
document.getElementById("explorar").addEventListener("click", function(){
    const produtosDestaques = document.getElementById("produtos-destaque");
    if (produtosDestaques) {
        produtosDestaques.scrollIntoView({ behavior: "smooth", block: "start"});
    }
})
*/

const menuToggle = document.querySelector('.menu-toggle');
const nvaLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    nvaLinks.classList.toggle('active');
});

// Seleciona os elementos necessários
const imagemPrincipal = document.getElementById('imagemPrincipal');
const imagensCarrossel = document.querySelectorAll('#imagem-carrossel img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentImageIndex = 0;

// Atualiza a imagem principal
function updateImagemPrincipal(index) {
    imagemPrincipal.src = imagensCarrossel[index].src;
}

// Botão "Próximo"
nextButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % imagensCarrossel.length;
    updateImagemPrincipal(currentImageIndex);
});

// Botão "Anterior"
prevButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + imagensCarrossel.length) % imagensCarrossel.length;
    updateImagemPrincipal(currentImageIndex);
});

// Exibe a primeira imagem ao carregar
updateImagemPrincipal(currentImageIndex);









