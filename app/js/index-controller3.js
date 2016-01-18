angular.module('delta').controller('IndexController3', IndexController3);

IndexController3.$inject = ['$scope'];

function IndexController3($scope){

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
