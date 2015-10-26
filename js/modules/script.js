// Code goes here


(function () {
	var app = angular.module("myapp", []);

	var MainController = function($scope, github, $interval, $log) {
	    	
		$scope.username = 'angular';
		$scope.message = 'GitHub Viewer';
		$scope.repoSortOrder = '-stargazers_count';
		$scope.countdown = 5;
		
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

		$scope.search = function(username) {
			$log.info('searching for ' + username);
			github.getUser(username).then(onUserComplete, onError);
			if(countdownInterval) {
				$interval.cancel(countdownInterval);
				$scope.countdown = null;			
			}
		}

		var decrementCountdown = function(){
			$scope.countdown -= 1;
			if ($scope.countdown < 1) {
				$scope.search($scope.username);
			}
		};

		var countdownInterval = null;
		var startCountdown = function(){
			countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
		};

		startCountdown();
		

	};

	app.controller('MainController', ["$scope", "github", "$interval", "$log", MainController]);
}());
