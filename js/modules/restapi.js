(function () {

    var restapi = function ($http, $log) {
        var getUser = function (user_id, token) {
            urlUser = '/api/users/' + user_id + '?format=json';
            $log.debug('url: ' + urlUser);
            $log.debug('token: ' + token);
            var req = {
                method: 'GET',
                url: urlUser,
                headers: {
                    'Authorization': 'Token ' + token
                }
            };
            return $http(req)
                .then(function (response) {
                    return response.data;
                });
        };

        var getToken = function (username, password) {
            $log.debug('username: ' + username);
            $log.debug('password: ' + password);

            urlToken = 'http://127.0.0.1:8000/api-token-auth/';
            $log.debug('urlToken: ' + urlToken);
            var req = {
                method: 'POST',
                url: urlToken,
                data: {'username': username, 'password': password}
            };

            data = {'username': username, 'password': password};

            //return $http.get(urlToken)
            //    .then(function (response) {
            //        return response.data;
            //    });

            return $http(req)
                .then(function (response) {
                    return response.data;

                });

        };


        //var getRepos = function (user) {
        //    return $http.get(user.repos_url)
        //        .then(function (response) {
        //            return response.data;
        //        });
        //};


        return {
            getUser: getUser,
            getToken: getToken
        };
    };

    var module = angular.module("myapp");
    module.factory("restapi", restapi);
}());

