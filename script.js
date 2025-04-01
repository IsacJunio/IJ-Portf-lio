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

