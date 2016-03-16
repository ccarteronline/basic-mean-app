'use strict';

describe('homeCtrl unit test', function () {
    beforeEach(module('baseApp'));
    var homeCtrl, scope;

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope;
        homeCtrl = $controller('homeCtrl', {
            $scope: scope
        });
    }));

    it('should say hello', function () {
        expect(scope.hello).toBe('hello');
    });
});
