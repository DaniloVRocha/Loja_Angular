angular.module('app').controller('UsuariosController', UsuariosController)
UsuariosController.$inject = ['$location', 'CursoService'];

    function UsuariosController($location, CursoService){
        vm = this;
        vm.teste = 'Home';
        vm.clientes = '';
        vm.erro = false;

        vm.init = function(){
            vm.listarClientes()
        }

        vm.navegar = function(rota, id){
            $location.path(rota + '/' + id)
        }

        vm.listarClientes = function(){
            CursoService.exec_GET().then(function(resposta){
                if(resposta){
                    vm.clientes = resposta;
                }else{
                    vm.erro = true;
                }
            })
        }

        vm.excluir = function(id){
            CursoService.exec_DEL(id).then(function(resposta){
                if(resposta){
                    alert(`Usuario ${id} excluido com sucesso `)
                }
            })
   
        }

        vm.editar = function(id){
            vm.navegar('Cadastro', id)
        }
    }