const imagem = document.getElementById('img');
const botoes = document.getElementById('buttons');

let indiceCor = 0;
let idIntervalo = null;
// Controla o índice das cores (0, 1, 2 e volta para 0)
const proximoIndice = () => {
indiceCor = indiceCor < 2 ? ++indiceCor : 0;
}
// Objeto responsável por ligar cada cor
const ligar = {
'red': () => imagem.src = './img/vermelho.png',
'yellow': () => imagem.src = './img/amarelo.png',
'green': () => imagem.src = './img/verde.png',
'automatic': () => idIntervalo = setInterval(mudarCor, 1500)
}
// Alterna automaticamente as cores
const mudarCor = () => {
const cores = ['green', 'yellow', 'red'];
const cor = cores[indiceCor];
ligar[cor]();
proximoIndice();
}
// Para o modo automático
const pararAutomatico = () => {
clearInterval(idIntervalo);
}
// Controla o clique dos botões
const controlarSemaforo = (event) => {
pararAutomatico();
ligar[event.target.id]();
}
botoes.addEventListener('click', controlarSemaforo);