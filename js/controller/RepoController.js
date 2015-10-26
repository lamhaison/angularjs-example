//Code to here


(function(){
    var module = angular.module('myapp');

    var RepoController = function($scope, $routeParams, github, $log){
        $log.debug('go to repo controller');
        var reponame = $routeParams.reponame;
        var username = $routeParams.username;
        $log.debug('username: ' + username + 'reponame: ' + reponame);

        var onRepo = function (data) {
            $log.debug('data: %s' % data);
            $scope.repo = data;
        };

        var onError = function(reason){
            $scope.error = reason;
        };

        github.getRepoDetails(username, reponame)
            .then(onRepo, onError);
    };

    module.controller("RepoController", RepoController);
    //app.controller("RepoController", ["$scope", "$routeParams", "github", "$log", RepoController]);

}());




