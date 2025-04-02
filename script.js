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

// Botão de volta ao topo
window.onscroll = function(){
  let botao = document.getElementById("btnTopo")
  if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
    botao.style.display = "block";
  }
  else {
    botao.style.display = "none";
  };
}

function voltarTopo(){
  window.scroll({top:0, behavior: "smooth"});
}