angular.service('FileSaver', ['$window', function($window) {
	return $window.saveAs;
}]);
