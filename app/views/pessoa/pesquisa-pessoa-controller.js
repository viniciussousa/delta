angular.module('delta').controller('PesquisaPessoaController', PesquisaPessoaController);

function PesquisaPessoaController($scope, $state, AlertService){
    $scope.nome = 'Pesquisa Controller';
    $scope.redirecionarParaCadastro = redirecionarParaCadastro;

    function redirecionarParaCadastro(){
        $state.go('cadastroPessoa',{id:10});
    }

    $scope.$on('testeBroadcastEvent', function(event){
       var teste = event;
        AlertService.showSuccess(teste);
    });
}