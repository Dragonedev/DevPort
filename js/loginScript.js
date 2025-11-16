//show signature
window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY; // posição do scroll
    const images = document.querySelectorAll('.show-sign');

    images.forEach(img => {
        if (scrollPosition > 0.1) { // quando o usuário rolar mais de 100px
            img.classList.add('visible'); // adiciona a classe para aparecer
        }
        if (scrollPosition > 380) { // quando o usuário rolar mais de 100px
            img.classList.remove('visible'); // adiciona a classe para aparecer
        }
    });
});

//hide photos
window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY; // posição do scroll
    const images = document.querySelectorAll('.scroll-hide');

    images.forEach(img => {
        if (scrollPosition > 700) { // quando o usuário rolar mais de 100px
            img.classList.add('invisible'); // adiciona a classe para aparecer
        } else {
            img.classList.remove('invisible'); // remove se voltar para o topo
        }
    });
});

//show photos
window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY; // posição do scroll
    const images = document.querySelectorAll('.scroll-show');

    images.forEach(img => {
        if (scrollPosition > 50) { // quando o usuário rolar mais de 100px
            img.classList.add('visible'); // adiciona a classe para aparecer
        } else {
            img.classList.remove('visible'); // remove se voltar para o topo
        }
    });
});

// Classe usuário
class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
    }
}

// Lista de usuários
let emails = [
    new Usuario("eduardo@example.com", "12345"),
    new Usuario("alexandra@example.com", "abcde"),
    new Usuario("paty.correa@ymail.com", "12345")
];

// Pega elementos do HTML
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const mensagem = document.getElementById('mensagem');
const loading = document.getElementById("loading");

function verificar() {
    const email = emailInput.value.trim();
    const senha = senhaInput.value.trim();

    loading.classList.remove("hidden");

    // Procura usuário na lista
    const usuarioEncontrado = emails.find(u => u.email === email);

    // Dá um tempinho para o carregamento aparecer
    setTimeout(() => {

        if (email == "" && senha != "") {
            mensagem.innerHTML = "E-mail não digitado";
        } else if (senha == "" && email != "") {
            mensagem.innerHTML = "Senha não digitada";
        } else if (email == "" && senha == "") {
            mensagem.innerHTML = "Nada foi digitado";
        } else if (!usuarioEncontrado && senha != "") {
            mensagem.innerHTML = "E-mail não cadastrado";
        } else if (usuarioEncontrado && usuarioEncontrado.senha === senha && senha != "") {
            mensagem.innerHTML = "";
            loading.classList.add("hidden");
            window.location.href = "index.html";
            return;

        } else if (usuarioEncontrado && usuarioEncontrado.senha !== senha && senha != "") {
            mensagem.innerHTML = "Senha incorreta!";
        }

        loading.classList.add("hidden");
    }, 1500);
}








