angular.module('taboo', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('taboo').config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    /* Add New States Above */

});

angular.module('taboo').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
