// Texto h1 animado

const txt = "Meu Portfólio.";
let i = 0;

function typeEffect() {
  if(i < txt.length) {
    document.getElementById("typing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeEffect, 150);
  }
};

typeEffect();



// Botão volatar ao topo


window.onscroll = function (){
  let botao = document.getElementById("botaoTopo");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
    botao.style.display = "block";
  }
  else {
    botao.style.display = "none";
  };
};

function voltarTopo() {
  window.scrollTo({top: 0, behavior: "smooth"});
}
