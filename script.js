let botao = document.querySelector("#botao");
let divMensagem = document.querySelector("#mensagem");

botao.addEventListener("click", () => {
    divMensagem.textContent = "Boas vindas ao meu site!";
    setTimeout(() => {
        divMensagem.textContent = "";
    }, 2000);
});
