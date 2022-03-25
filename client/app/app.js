// criando a instância do controller
const controller = new NegociacaoController();

// passando diretamente controller.adiciona

document.querySelector('.form').addEventListener('submit', controller.adiciona.bind(controller));

document.querySelector('#botao-apaga').addEventListener('click', controller.apaga.bind(controller));