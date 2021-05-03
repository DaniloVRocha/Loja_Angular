angular.module('app').controller('CarrinhoController',CarrinhoController);
CarrinhoController.$inject = ['$location'];

    function tatrarValores (valor) {
        if (valor) {
        return Number(valor.replace('R$', '')
            .replace('.', '')
            .replace(',', '.'));
        }
    }

    function CarrinhoController($location){
        carrinho = this ;
        let listaDeCarrinho = [];
        carrinho.produtosNoCarrinho = []
        carrinho.valorCarrinho = [carrinho.produtosNoCarrinho.preco]

        carrinho.adicionarCarrinho = function(produto){
            if(produto != undefined){
                listaDeCarrinho.push(produto)
                carrinho.produtosNoCarrinho = listaDeCarrinho
            }
        };
        carrinho.limparCarrinho = function(){
           carrinho.produtosNoCarrinho.splice(carrinho.produtosNoCarrinho[0],carrinho.produtosNoCarrinho.length)
        }

        carrinho.navegar = function (rota){
            $location.path(rota)
        }
        
        carrinho.calcularTotal = function () {
            if (carrinho.produtosNoCarrinho.length === 0) return 0.00
        
            return carrinho.produtosNoCarrinho
              .map(produto => tatrarValores(produto.preco))
              .reduce((valor1, valor2) => valor1 + valor2)
              .toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL'})
        
          }
        carrinho.finalizarCompra = function(){
            if(carrinho.produtosNoCarrinho.length != 0){
                alert("Compra Finalizada com sucesso")
            }else{
                alert("Não há produtos no carrinho")
            }
        }   

    }