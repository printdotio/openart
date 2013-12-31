angular.module('openart').directive('imgTile', ['BritishLibraryProjectionService','Widget', function(projectionService,widget) {
    return {
        template: '<div class="photo-wrap" ng-mouseenter="mouseenter()" ng-mouseleave="mouseleave()">\
                        <img ng-src="{{ image.thumbUrl }}">\
                        <div class="overlay" ng-show="state.showOverlay"></div>\
                        <div class="checkmark" ng-show="state.showCheckmark"></div>\
                        <div class="btns" ng-show="state.showBtns">\
                            <button class="btn" ng-class="{selected: isSelected()}" ng-click="select()">Print</button>\
                            <button class="btn" ng-class="{selected: isLoved()}" ng-click="love()">\
                                <i class="heart"></i>\
                                Love\
                            </button>\
                        </div>\
                    </div>'
        ,
        scope: {
            image: '='
        },
        link: function($scope, element) {
            isSelectedOrLoved = projectionService.isSelected($scope.image) || projectionService.isLoved($scope.image);

            $scope.state = {
                showOverlay: isSelectedOrLoved,
                showCheckmark: isSelectedOrLoved,
                showBtns: false
            };

            $scope.mouseenter = function(){
                $scope._state = angular.copy($scope.state);

                $scope.state.showOverlay = true;
                $scope.state.showCheckmark = false;
                $scope.state.showBtns = true;
            };

            $scope.mouseleave = function(){
                $scope.state = $scope._state;
            };

            $scope.select = function(){
                $scope._state.showOverlay = true;
                $scope._state.showCheckmark = true;

                projectionService.select($scope.image);
                widget.launch();
            };

            $scope.love = function(){
                $scope._state.showOverlay = true;
                $scope._state.showCheckmark = true;

                projectionService.love($scope.image);
            };

            $scope.isSelected = function(){
                return projectionService.isSelected($scope.image);
            };

            $scope.isLoved = function(){
                return projectionService.isLoved($scope.image);
            };
        }
    }
}]);