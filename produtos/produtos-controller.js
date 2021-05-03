angular.module('app').controller('ProdutosController',ProdutosController)
ProdutosController.$inject = ['CursoService'];

    function ProdutosController(CursoService){
        vm = this;
        vm.produtos = '';

        vm.listarProdutos = function(){
            CursoService.exec_GETPROD().then(function(resposta){
                if(resposta){
                    vm.produtos = resposta;
                }
            })
        }
        vm.init = function(){
            vm.listarProdutos()
            console.log(vm.produtos)
        }

    };