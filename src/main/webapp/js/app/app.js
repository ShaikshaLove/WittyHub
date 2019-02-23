angular.module("Mytube",["VideoModule","ngRoute"]);


angular.module("Mytube").config(function($routeProvider){
      console.log("RouteProvider")
	$routeProvider.when("/productRegister",{
		templateUrl:"js/app/product/html/ProductRegister.html",
		controller:"ProductRegisterCtrl"

	});
      console.log("routeProvider-otherwise");

	$routeProvider.otherwise(
			{
				templateUrl:"js/app/video/html/videos.html",
				controller:"VideoController"
			});

});