// Code goes here


(function () {
	var app = angular.module("myapp");
	var UserController = function($scope, $interval, $log, github, $routeParams) {
		$log.debug('got to user controller');		
		var onUserComplete = function(data) {
			$log.info('data' + data);
			$scope.user = data;
			github.getRepos($scope.user).then(onRepos, onError);	
		};

		var onRepos = function(data) {
			$scope.repos = data;		
		};
	
		var onError = function(reason) {
			$scope.error = "Can not get data";	
		};

		$scope.username = $routeParams.username;
		$scope.repoSortOrder = '-stargazers_count';
		github.getUser($scope.username).then(onUserComplete, onError);


	};

	app.controller('UserController', UserController);
	//app.controller('UserController', ["$scope", "$interval", "$log", "github", "$routeParams", UserController]);
}());
