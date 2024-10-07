function rolar (){
    const banner = document.querySelector('.Dias');
    const imageWidth = banner.querySelector('.Dias > img').clientWidth; // Obtém a largura da imagem
    banner.scrollBy({
        left: imageWidth,
        behavior: 'smooth'
    });
}
function rolar2 (){
    const banner = document.querySelector('.Dias');
    const imageWidth = banner.querySelector('.Dias > img').clientWidth; // Obtém a largura da imagem
    banner.scrollBy({
        left: -imageWidth,
        behavior: 'smooth'
    });
}

const banner = document.querySelector('.banerR');
document.querySelector(".Direita").addEventListener("click", function(){
    rolar ()
})
document.querySelector(".Esquerda").addEventListener("click", function(){
    rolar2 ()
})

