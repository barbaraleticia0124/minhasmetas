const botoes= document.querySelectorALL(".botao");
const textos= document.querySelectorAll(".aba-conteudo");

for(leti=0;i <botoes.length;i++){
    botoes[i].onclick = function(){
        
        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Data ("2023-10-05T00:00:00");
let tempoAtual= new Data();

contadores[0].textContent= tempoObjetivo1-tempoAtual;