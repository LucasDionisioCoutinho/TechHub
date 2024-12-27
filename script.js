

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


const imagens = document.querySelectorAll('#imagem-carrossel img')
const imagemPrincipal = document.getElementById('imagemPrincipal')

imagens.forEach(imagem => {
    imagem.addEventListener('click', (event) => {
        imagemPrincipal.src = event.target.src 
    })
})