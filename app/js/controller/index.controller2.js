angular.module('delta.controller').controller('IndexController2', IndexController2);

/* @ngInject */

function IndexController2($scope){

    $scope.nome = 'Vinicius Sousa';
    $scope.myStyle = {};

    $scope.$watch('nome', onChangeNome);

    function onChangeNome(novoValor, valorAntigo){
        if(novoValor === valorAntigo){
            return;
        }

        if(novoValor === 'delta'){
            $scope.myStyle.backgroundColor = 'red';
        }
        else{
            $scope.myStyle.backgroundColor = 'blue';
        }
    }
}
