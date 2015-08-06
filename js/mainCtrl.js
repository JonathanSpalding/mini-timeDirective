var timeModule = angular.module("timeApp");

timeModule.controller("mainCtrl", function($scope){
    $scope.name = "Jon Spalding";
    
    $scope.mrAwesome = "Mr. Super Duper Awesome";
    $scope.mrsAwesome = "Mrs. Kinda Awesome";
    
    $scope.me = "Jon Spalding is the best";
    
    $scope.onMeet = function(name){
        $scope.metPerson = name;
    };
});

