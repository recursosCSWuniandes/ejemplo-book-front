(function (ng) {

    var mainApp = ng.module("mainApp", [
        "ui.router"
    ]);

    mainApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/book");
            $stateProvider
                    .state('book', {
                        url: '/book',
                        templateUrl: "src/modules/book/book.tpl.html"
                    })
                    .state('author', {
                        url: '/author',
                        templateUrl: "src/modules/author/author.tpl.html"
                    })
                    .state('editorial', {
                        url: '/editorial',
                        templateUrl: "src/modules/editorial/editorial.tpl.html"
                    });
        }]);

    mainApp.config(['$logProvider', function ($logProvider) {
        $logProvider.debugEnabled(true);
    }]);
})(window.angular);
