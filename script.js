

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