angular.module("VideoModule").controller("VideoController",function($scope,VideoServices){
        $scope.myValue=true;
        $scope.videos=[];
        console.log("From VideoListCtrl");
        VideoServices.getVideos().then(function (serverdata){
            $scope.videos=serverdata.data;
            $scope.myValue=false;
        },function (error){
            alert("error while loading the data");
        });

});
