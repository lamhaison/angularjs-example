// Code goes here


(function () {
	var app = angular.module("myapp");

	var MainController = function($scope, $interval, $log, $location) {
		$log.debug('go to controller');
		var onError = function(reason) {
			$scope.error = "Can not get data";	
		};

		$scope.search = function(username) {
			if(countdownInterval) {
				$interval.cancel(countdownInterval);
				$scope.countdown = null;			
			}

			$location.path("/user/" + username);
		};

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

			    	
		$scope.username = 'angular';
		$scope.countdown = 5;
		startCountdown();
		

	};


	app.controller("MainController", MainController);
	//app.controller("MainController", ["$scope", "$interval", "$log", "$location", MainController]);
}());
