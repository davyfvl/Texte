const popu = document.querySelector(".popup")
function popup (){
    popu.style.display = "flex";
}
const popu2 = document.querySelector(".popupr")
function popup0 (){
    popu2.style.display = "flex";
}

const botaoC = document.querySelector(".fecharr")
botaoC.addEventListener("click", function(){
    popu2.style.display = "none";
})

const botaoF = document.querySelector(".fechar")
botaoF.addEventListener("click", function(){
    popu.style.display = "none";
})


document.querySelector("#botaoEnviarOracao").
addEventListener("click", function() {
    const nome = document.querySelector(".no").value;
    const sobrenome = document.querySelector(".nome").value;
    const mensagem = document.querySelector(".pedido").value;

    if (!nome || !sobrenome || !mensagem) {
        popup0 ()
        return;
    }

    const corpoEmail = `
        <div style="font-size: 60px;">
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Sobrenome:</strong> ${sobrenome}</p>
            <p><strong>Pedido:</strong> ${mensagem}</p>
        </div>
    `;
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "davyv1275@gmail.com",
        Password: "45E89321F17DAB1F04F801F3497F44A6F67C",
        To: 'davyv1275@gmail.com',
        From: "davyv1275@gmail.com",
        Subject: `Pedido de oração de ${nome} ${sobrenome}`,
        Body: corpoEmail
    }).then(
           message => {
            popup ()
        }
    ).catch(
        error => {
            alert("Erro ao enviar: " + error);
        }
    );
});