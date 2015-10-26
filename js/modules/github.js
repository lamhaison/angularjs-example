(function () {

    var github = function ($http, $log) {
        var getUser = function (username) {
            return $http.get('http://api.github.com/users/' + username)
                .then(function (response) {
                    return response.data;
                });
        };

        var getRepos = function (user) {
            return $http.get(user.repos_url)
                .then(function (response) {
                    return response.data;
                });
        };

        var getRepoDetails = function (username, reponame) {
            var repo;

            var repoUrl = 'http://api.github.com/repos/' + username + '/' + reponame;
            $log.debug('repoUrl: ' + repoUrl);

            return $http.get(repoUrl)
                .then(function (response) {
                    repo = response.data;
                    $log.debug('collaborator: '+ repoUrl + "/collaborators");
                    return $http.get(repoUrl + "/collaborators");
                })
                .then(function(response){
                    repo.collaborators = response.data;
                    return repo;
                })
        };

        return {
            getUser: getUser,
            getRepos: getRepos,
            getRepoDetails: getRepoDetails
        };
    };

    var module = angular.module("myapp");
    module.factory("github", github);
}());

