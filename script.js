let botaoTeste = document.querySelector("#btnClick");
let divRes = document.querySelector("#res")

botaoTeste.addEventListener("click", ()=> {
    divRes.innerHTML = "Botao Clicado";
})