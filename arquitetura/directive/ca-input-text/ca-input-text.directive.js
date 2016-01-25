(function(){
    'use restrict';

    angular.module('delta.directive').directive('caInputText', caInputText);

    function caInputText(){
        return{
            link : link,
            restrict : 'E',
            templateUrl : 'arquitetura/directive/ca-input-text/ca-input-text.directive.html',
            scope:{
                label : '@',
                colspan : '@',
                ngModel : '=',
                ngRequired: '=?',
            }

        };

        function link(scope, element, attr){
            scope.myColspan = 'col-sm-' + attr.colspan;
        }
    }

})();