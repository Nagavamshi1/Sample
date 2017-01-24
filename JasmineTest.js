describe(‘Hello World example ’, function() {

beforeEach(module(‘app’));

var HelloWorldTest,
scope;

beforeEach(inject(function ($rootScope, $controller) {
scope = $rootScope.$new();
HelloWorldTest = $controller('HelloWorldCtrl', {
$scope: scope
});
}));
it('says hello world!', function () {
expect(scope.Output).toEqual("Hello world!”);
});

});
