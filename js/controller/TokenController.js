// Code goes here

(function () {
	var app = angular.module("myapp");
	var TokenController = function($scope, $log, restapi) {
		$log.debug('got to token controller');
		var onTokenComplete = function(data) {
			$log.info('data' + data);
			$scope.token = data;
			restapi.getUser($scope.user_id, $scope.token.token).then(onUser, onError);
		};

		var onError = function(reason) {
			$scope.token = null;
			$scope.error = "Can not get data";	
		};

		var onUser = function(data) {
			$log.info('data' + data);
			$scope.user = data;
		};


		$scope.gettoken = function(username, password, user_id) {

			$log.debug('user_id: ' + user_id);
			$scope.user_id = user_id;
			restapi.getToken(username, password).then(onTokenComplete, onError);
			//token = '6d0a3b11523a431bd3a1fda8495167b47c6c2a4f';
			//restapi.getUser(user_id, token)
			//	.then(onUser, onError);

		};

	};

	app.controller('TokenController', TokenController);
	//app.controller('UserController', ["$scope", "$interval", "$log", "github", "$routeParams", UserController]);
}());
