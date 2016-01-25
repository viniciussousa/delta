(function(){
    'use restrict';

    angular.module('delta.directive').directive('caSpan', caSpan);

    function caSpan(){
        return{
            restrict : 'E',
            templateUrl : 'arquitetura/directive/ca-span/ca-span.directive.html',
            scope:{
                texto : '@'
            }

        };
    }

})();