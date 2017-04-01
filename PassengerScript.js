/**
 * Created by BALASUBRAMANIAM on 01-04-2017.
 */
/**
 * Created by BALASUBRAMANIAM on 28-03-2017.
 */
var userModule = angular.module('UserModule',['ngMessages','ngMaterial','ngMdIcons']);

userModule.controller('RegCtrl',['$scope','$mdDialog','$interval',function($scope,$mdDialog,$interval)
{
    $scope.user={
        firstName:"",
        lastName:"",
        phoneNo:0
    }
  $scope.noOfPassengers=5;
    $scope.dataArray=[];
for(i=0;i<$scope.noOfPassengers;i++)
    $scope.dataArray.push($scope.user);

    console.log($scope.dataArray);

}]);

