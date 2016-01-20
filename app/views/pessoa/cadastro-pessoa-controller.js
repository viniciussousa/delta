angular.module('delta').controller('CadastroPessoaController', CadastroPessoaController);


function CadastroPessoaController($scope,$stateParams, AlertService){
    $scope.nome = 'Pessoa Controller';

    var meuId = $stateParams.id;

    if(meuId === '10'){
        AlertService.showSuccess('Parametro recebido com sucesso');
    }

}