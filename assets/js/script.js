window.addEventListener("load", function () {
    const loader = document.querySelector(".loader-wrapper");
    loader.style.display = "none";
});

// Verificador 
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (!isMobileDevice()) {
    var rellax = new Rellax('.rellax', {
        breakpoints: [576, 768, 1201]
    });
}

// Copy to clipboard
function copiarTexto() {
    const texto = "senaisorocaba@sp.senai.br";

    navigator.clipboard.writeText(texto)
        .then(() => {
            Swal.fire({
                title: "Email Copiado!",
                icon: "success"
            });
        })
        .catch(err => {
            console.error('Erro ao copiar: ', err);
        });
}

// Menu

document.querySelector("#menu").addEventListener("click", () => {
    document.querySelector("#sidebar").classList.toggle("active");
})

// Card

const card = document.querySelector("#card");
const titulo = document.querySelector("#tituloCard");
const descricao = document.querySelector("#descricaoCard");

let imagemAtual = 1;
const totalImagens = 4;

function trocarImagem() {
    card.classList.remove(`card-background-${imagemAtual}`);
    imagemAtual = (imagemAtual % totalImagens) + 1;
    card.classList.add(`card-background-${imagemAtual}`);
    trocarTitulo(imagemAtual);
    trocarDescricao(imagemAtual);
}

function trocarTitulo(count) {
    if (count == 1) {
        titulo.innerHTML = "EA Sports FC 24"
    } else if (count == 2) {
        titulo.innerHTML = "Pokémon GO"
    } else if (count == 3) {
        titulo.innerHTML = "Street Fighter 6"
    } else if (count == 4) {
        titulo.innerHTML = "Brawl Stars"
    }
}

function trocarDescricao(count) {
    if (count == 1) {
        descricao.innerHTML = "Viva a emoção do futebol em sua glória máxima com gráficos de última geração e jogabilidade imersiva."
    } else if (count == 2) {
        descricao.innerHTML = "Viva a emoção de ser um treinador! Com Pokémon GO, a diversão está em todos os lugares."
    } else if (count == 3) {
        descricao.innerHTML = "O retorno do rei da luta! Street Fighter 6 eleva o gênero para uma nova era de intensidade e habilidade. Entre na arena e faça história!"
    } else if (count == 4) {
        descricao.innerHTML = "Entre na arena e torne-se uma lenda! Brawl Stars oferece ação frenética e personagens cativantes para uma experiência de jogo inigualável."
    }
}

Fancybox.bind("[data-fancybox]", {
    // Opções de configuração
    baseClass: "my-fancybox",
    mobile: {
        autoFocus: false,
        clickContent: function (current, event) {
            return current.type === "image" ? "close" : "next";
        },
    },
    // Configuração específica para vídeos
    youtube: {
        controls: 1,
        showinfo: 0,
        rel: 0,
        autoplay: 1,
        loop: 1,
        mute: 0,
        enablejsapi: 1
    },
});


// Botão 
window.addEventListener("scroll", function () {
    let botaoRetornar = document.querySelector("#botaoRetornar");
    botaoRetornar.classList.toggle("activeScroll", window.scrollY > 500);
});