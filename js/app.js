(function () {
    var app = angular.module("myapp", ["ngRoute"]);

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/main", {
                templateUrl: "pages/main.html",
                controller: "MainController"
            })

            .when("/user/:username", {
                templateUrl: "pages/user.html",
                controller: "UserController"
            })
            .when("/repo/:username/:reponame", {
                templateUrl: "pages/repo.html",
                controller: "RepoController"
            })
            .when("/token/", {
                templateUrl: "pages/token.html",
                controller: "TokenController"
            })
            .otherwise({redirectTo: "/main"});
    });
}());
