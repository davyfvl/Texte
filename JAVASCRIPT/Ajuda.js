
document.querySelector("#Ajuda").addEventListener("click", function() {
    // Captura os valores dos campos do formulário
    const nome = document.querySelector(".ajudanome").value.trim();
    const gmail = document.querySelector(".tel").value.trim();
    const tell = document.querySelector(".Gmail").value.trim();

    // Verificação para garantir que todos os campos estão preenchidos
    if (!nome || !gmail || !tell) {
        popup0()
        return;
    }

    // Corpo do email
    const corpoEmail = `
        <div style="font-size: 60px;">
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Gmail:</strong> ${gmail}</p>
            <p><strong>Telefone:</strong> ${tell}</p>
        </div>
    `;

    // Envio do email
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "davyv1275@gmail.com",
        Password: "45E89321F17DAB1F04F801F3497F44A6F67C",
        To: 'davyv1275@gmail.com',
        From: "davyv1275@gmail.com",
        Subject: `${nome} pede ajuda`,
        Body: corpoEmail
    }).then(
        message => {
           popup()
        }
    ).catch(
        error => {
            alert("Erro ao enviar: " + error);
        }
    );
});
