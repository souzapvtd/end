const imagem = document.getElementById('png');
const botoes = document.getElementById('buttons');

let indiceLogo = 0;
let idIntervalo = null;

const proximoIndice = () => {
indiceLogo = indiceLogo < 2 ? ++indiceLogo : 0;
}
// Objeto responsável por ligar cada cor
const ligar = {
'whatsapp': () => imagem.src = './img/whatsapp.png',
'instagram': () => imagem.src = './img/instagram.png',
'automatic': () => idIntervalo = setInterval(mudarLogo, 1500)
}
// Alterna automaticamente as cores
const mudarLogo = () => {
const logos = ['whatsapp', 'instagram'];
const logo = logos[indiceLogo];
ligar[logo]();
proximoIndice();
}
// Para o modo automático
const pararAutomatico = () => {
clearInterval(idIntervalo);
}
// Controla o clique dos botões
const controlarLogo = (event) => {
pararAutomatico();
ligar[event.target.id]();
}
botoes.addEventListener('click', controlarLogo);