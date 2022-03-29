// criando a instância do controller
const controller = new NegociacaoController();

const $ = document.querySelector.bind(document);

// passando diretamente controller.adiciona

$('.form').addEventListener('submit', controller.adiciona.bind(controller));

$('#botao-apaga').addEventListener('click', controller.apaga.bind(controller));

$('#botao-importa').addEventListener('click', controller.importarNegociacoes.bind(controller));