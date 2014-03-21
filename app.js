angular.module('taboo', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('taboo').config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/main-menu');

    $stateProvider.state('main-menu', {
        url: '/main-menu',
        templateUrl: 'partial/main-menu/main-menu.html'
    });
    $stateProvider.state('game-setup', {
        url: '/game-setup',
        templateUrl: 'partial/game-setup/game-setup.html'
    });
    $stateProvider.state('game', {
        url: '/game',
        templateUrl: 'partial/game/game.html'
    });
    $stateProvider.state('game.playing-team', {
        url: '/playing-team',
        templateUrl: 'partial/playing-team/playing-team.html'
    });
    $stateProvider.state('game.opposing-team', {
        url: '/opposing-team',
        templateUrl: 'partial/opposing-team/opposing-team.html'
    });
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
