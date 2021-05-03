angular.module('app').config(function($routeProvider) {
    $routeProvider //injetou dependencia
        .when('/Cadastro/:idCli?', { //quando receber a chamada, redirecione para:
            templateUrl: '/cadastro/cadastro.html', //o seguinte template url
            controller: 'CadastroController as vm'
        })
        .when('/Usuarios', { //quando receber a chamada, redirecione para:
            templateUrl:'usuarios/usuarios.html', //o seguinte template url
            controller: 'UsuariosController as vm'
        })
        .when('/Carrinho', { //quando receber a chamada, redirecione para:
            templateUrl:'carrinho/carrinho.html', //o seguinte template url
            controller: 'CarrinhoController as vm'
        })
        .otherwise({ // quando a rota não existir apontar para DEFAULT
            templateUrl: 'produtos/produtos.html', //redirecione para template padrão
            controller: 'ProdutosController as vm'
        })
})