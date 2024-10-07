function copiarTexto() {
    var texto = "984747338"; // Texto a ser copiado
    navigator.clipboard.writeText(texto).then(function() {
    })
}
const copiar = document.querySelector("#Copiar")
copiar.addEventListener("click" , function(){
    copiarTexto()
})