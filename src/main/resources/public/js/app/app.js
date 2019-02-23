angular.module("Mytube",["VideoModule","ngRoute"]);


angular.module("Mytube").config(function($routeProvider){
      console.log("RouteProvider")
	$routeProvider.when("/upload",{
		templateUrl:"js/app/video/html/upload-video.html",
		controller:"VideoUploaderCtrl"

	});

	$routeProvider.otherwise(
			{
				templateUrl:"js/app/video/html/videos.html",
				controller:"VideoController"
			});

});