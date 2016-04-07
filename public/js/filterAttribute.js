var app = angular.module('filterAttribute', []);

app.controller('attributeController', [
  '$scope',
  function($scope){
    $scope.categories = [
      "Pembantu Rumah Tangga", "Supir", "Nanny"
    ];
    $scope.ages = [
      '17', '20', '25', '30', '45'
    ];
    $scope.religions = [
      "Islam", "Kristen", "Budha", "Hindu"
    ];
    $scope.educations = [
      "SD", "SMP", "SMA", "Sarjana"
    ];
    $scope.maritals = [
      "Lajang", "Menikah", "Janda", "Duda"
    ];
    $scope.wages = [
      "0 - 1.000.000", "1.000.001 - 1.500.000", "1.500.001 - 2.000.000", "2.000.001 - 2.500.000", "2.500.001 - 3.000.000", "> 3.000.000"
    ];
  }
]);
