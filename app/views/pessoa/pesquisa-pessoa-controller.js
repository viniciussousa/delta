angular.module('delta').controller('PesquisaPessoaController', PesquisaPessoaController);

function PesquisaPessoaController($scope, $state){
    $scope.nome = 'Pesquisa Controller';
    $scope.redirecionarParaCadastro = redirecionarParaCadastro;

    function redirecionarParaCadastro(){
        $state.go('cadastroPessoa',{id:10});
    }
}