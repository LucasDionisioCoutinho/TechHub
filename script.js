


document.getElementById("explorar").addEventListener("click", function(){
    const produtosDestaques = document.getElementById("produtos-destaque");
    if (produtosDestaques) {
        produtosDestaques.scrollIntoView({ behavior: "smooth", block: "start"});
    }
})