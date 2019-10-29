'use strict';
let myApp = angular.module('Angular-App', []);

myApp.controller('mainController', function($scope) {
    $scope.toDoWorkList = [
        {
            description: 'Soccer Match at Bellavue Stadium',
            time: '09:00 am',
            priority: 'High'
        },
        {
            description: 'Andiamo, 938 110yh Avenue NE #1, Bellavue.',
            time: '4:00 pm',
            priority: 'Medium'
        }
    ];

$scope.addWork = function(){
    $scope.toDoWorkList.push(
        {
            description: $scope.toDoWork.description,
            time: $scope.toDoWork.time,
            priority: $scope.toDoWork.priority
        }
    );

    $scope.toDoWork.description = '';
    $scope.toDoWork.time = '';
    $scope.toDoWork.priority = '';
}
});