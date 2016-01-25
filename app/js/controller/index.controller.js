(function(){
    'use restrict'

    angular.module('delta').controller('IndexController', IndexController);

    /* @ngInject */

    function IndexController($scope, $timeout, AlertService, $filter,$rootScope,$state) {
        var vm = this;

        vm.listaDePessoas = [];
        vm.entidade = {};
        vm.salvar = salvar;
        vm.limpar = limpar;
        vm.onClickEditar = onClickEditar;
        vm.getRowStyle = getRowStyle;
        iniciar();

        function iniciar() {
            vm.gridOptions = {
                data: 'listaDePessoas',
                columnDefs: [
                    {field: 'nome', displayName: 'Nome', width: 300},
                    {field: 'sobrenome', displayName: 'Sobrenome', width: 300},
                    {
                        field: 'nascimento',
                        displayName: 'Dt. Nascimento',
                        width: 300,
                        cellTemplate: 'app/template/cell-template-date.html'
                    },
                    {
                        field: 'editar',
                        displayName: '',
                        width: 185,
                        cellTemplate: 'app/template/cell-template-editar.html'
                    }
                ],
                rowTemplate: 'app/template/row-template.html',
                enableSorting: true,
            };
        }

        function salvar() {
            setarTouchedNosInputs();
            if (vm.formPessoa.$invalid) {
                AlertService.showWarning('Preencha os campos corretamente');
                return;
            }
            var data = vm.entidade.nascimento;
            vm.ultimaDataCadastrada = $filter('date')(data, 'dd/MM/yyyy');

            vm.idade =

                vm.listaDePessoas.push(vm.entidade);
            AlertService.showSuccess('Registro salvo com sucesso');
            limpar();
        }

        function limpar() {
            vm.entidade = {};
            $timeout(function () {
                setarUntouchedNosInputs();
            }, 80);
        }

        function setarTouchedNosInputs() {
            angular.forEach(vm.formPessoa.$error, function (error) {
                angular.forEach(error, function (field) {
                    field.$setTouched();
                });
            });
        }

        function setarUntouchedNosInputs() {
            angular.forEach(vm.formPessoa.$error, function (error) {
                angular.forEach(error, function (field) {
                    field.$setUntouched();
                });

            });
        }

        function onClickEditar(entity) {
            vm.entidade = entity;
        }

        function getRowStyle(linhaSelecionada) {
            var style = {};
            style.backgroundColor = linhaSelecionada.cor;
            style.color = 'white';
            return style;
        }

        vm.dispararEvento = function () {
            $rootScope.$broadcast('testeBroadcastEvent', {nome: 'Vinicius'});
            $state.go('homeCaraiDeAsa');
        };

        $rootScope.$on('$stateChangeStart', stateChangeStart);
        $rootScope.$on('$stateChangeSuccess', stateChangeSuccess);
        $rootScope.$on('$stateNotFound', stateNotFound);

        function stateChangeStart(event, toState, toParams, fromState, fromParams) {
            if (toState.name === 'cadastroPessoa') {
                AlertService.showError('Voce não possui permissão para acessar esta tela');
                event.preventDefault();
            }
        }

        function stateChangeSuccess(event, toState, toParams, fromState, fromParams) {
            AlertService.showSuccess('Carregou estato ' + toState.name + ' com sucesso');
        }

        function stateNotFound(event, unfoundState, fromState, fromParams) {
            AlertService.showError('Essa página não existe');
            $state.go('home')
        }
    }

})();


