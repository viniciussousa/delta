angular.module('delta').controller('IndexController', IndexController);

IndexController.$inject = ['$scope','$timeout', 'AlertService', '$filter','$rootScope'];

function IndexController($scope, $timeout, AlertService, $filter,$rootScope){

    $scope.listaDePessoas = [];
    $scope.entidade = {};
    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.onClickEditar = onClickEditar;
    $scope.getRowStyle = getRowStyle;
    iniciar();

    function iniciar(){
        $scope.gridOptions  = {
            data : 'listaDePessoas',
            columnDefs:[
              {field:'nome', displayName: 'Nome', width : 300},
              {field:'sobrenome', displayName: 'Sobrenome', width : 300},
              {field:'nascimento', displayName: 'Dt. Nascimento', width : 300, cellTemplate : 'app/template/cell-template-date.html'},
              {field:'editar', displayName: '', width : 185, cellTemplate : 'app/template/cell-template-editar.html'}
            ],
            rowTemplate : 'app/template/row-template.html',
            enableSorting: true,
        };
    }

    function salvar(){
        setarTouchedNosInputs();
        if($scope.formPessoa.$invalid){
            AlertService.showWarning('Preencha os campos corretamente');
            return;
        }
        var data = $scope.entidade.nascimento;
        $scope.ultimaDataCadastrada = $filter('date')(data, 'dd/MM/yyyy');

        $scope.idade =

        $scope.listaDePessoas.push($scope.entidade);
        AlertService.showSuccess('Registro salvo com sucesso');
        limpar();
    }

    function limpar(){
        $scope.entidade = {};
        $timeout(function(){
            setarUntouchedNosInputs();
        }, 80);
    }

    function setarTouchedNosInputs(){
        angular.forEach($scope.formPessoa.$error, function(error) {
            angular.forEach(error, function (field) {
                field.$setTouched();
            });
        });
    }

    function setarUntouchedNosInputs(){
        angular.forEach($scope.formPessoa.$error, function(error){
           angular.forEach(error,function(field){
                field.$setUntouched();
           });

        });
    }

    function onClickEditar(entity){
        $scope.entidade = entity;
    }

    function getRowStyle(linhaSelecionada){
        var style = {};
        style.backgroundColor = linhaSelecionada.cor;
        style.color = 'white';
        return style;
    }

    $scope.dispararEvento = function(){
        $rootScope.$broadcast('testeBroadcastEvent', {nome : 'Vinicius'})
    };

    $rootScope.$on('$stateChangeStart', stateChangeStart);

    function stateChangeStart(event, toState, toParams, fromState, fromParams){
        if(toState.name === 'cadastroPessoa'){
            AlertService.showError('Voce não possui permissão para acessar esta tela');
            event.preventDefault();
        }
    }
}
