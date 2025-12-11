AQUI


// Mostra a dica
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("dicaSenha").innerText = dicaDaSenha;
});

// Salva a carta que você escreveu
function salvarCarta() {
    const texto = document.getElementById("textoCarta").value;

    if (texto.trim() === "") {
        alert("Escreva algo antes de salvar!");
        return;
    }

    localStorage.setItem("cartaTexto", texto);

    // Esconde editor e mostra tela de senha (modo final)
    document.getElementById("editor-container").style.display = "none";
    document.getElementById("senha-container").style.display = "block";
}

// Verifica a senha
function verificarSenha() {
    let senha = document.getElementById("senha").value;

    if (senha === senhaCorreta) {
        document.getElementById("senha-container").style.display = "none";
        document.getElementById("carta-container").style.display = "block";

        document.getElementById("music").play();

        let texto = localStorage.getItem("cartaTexto");
        document.getElementById("mensagem").innerHTML = `<p>${texto}</p>`;
    } else {
        document.getElementById("erro").innerText = "Senha incorreta!";
    }
}

// Envelope
function abrirEnvelope() {
    let env = document.querySelector(".envelope");
    env.classList.add("aberto");

    setTimeout(() => {
        document.getElementById("mensagem").style.opacity = 1;
    }, 800);
}
