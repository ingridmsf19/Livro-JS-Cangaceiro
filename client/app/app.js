// criando a instância do controller
let controller = new NegociacaoController();

// passando diretamente controller.adiciona

document.querySelector('.form').addEventListener('submit', controller.adiciona.bind(controller));

