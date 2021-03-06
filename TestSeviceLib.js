/**
 * Created by BALASUBRAMANIAM on 06-04-2017.
 */
describe('Service Library Test Suite',function()
{
    var scope = {};
    var service,httpBackend;;

    beforeEach(function()
    {
        module('ServiceModule')

        inject(function ($injector, $httpBackend) {
            service = $injector.get('stateService');
            httpBackend = $injector.get('$httpBackend');

        })

    })

    it('should contain a response having length >0 in  from mock StateService',function()
    {

        var httpResponse = [{ "stateName": "TN" }, { "stateName": "AP" }];
        httpBackend.expectGET("https://www.whizapi.com/api/v2/util/ui/in/indian-states-list?project-app-key=vlubq5he9ngkiikqroseoxsf")
            .respond(200, httpResponse);

        var test = service.stateServiceObj();
        var result;
        test.then(function (response) {
            result = response.data;

        });

        httpBackend.flush();

        expect(result[0].stateName).toEqual("TN");

    })
    it('should contain a response having length >0 in  StateService',function()
    {

        var httpResponse = [{ "stateName": "TN" }, { "stuffId": "AP" }];
        httpBackend.expectGET("https://www.whizapi.com/api/v2/util/ui/in/indian-states-list?project-app-key=vlubq5he9ngkiikqroseoxsf").respond(200, httpResponse);
        var test = service.stateServiceObj();
        var result;
        test.then(function (response) {
            result = response.data;

        });

        httpBackend.flush();

        expect(result).toEqual(httpResponse);



    })


})


describe('Service Library Test Suite',function()
{
    var scope = {};

    var service,httpBackend,rootScope;

    beforeEach(function()
    {
        module('ServiceModule')

        inject(function ($injector, $httpBackend) {
            service = $injector.get('addStateService');
            httpBackend = $injector.get('$httpBackend');
            rootScope = $injector.get('$rootScope');

        })

    })

    it('should contain a add State from mock addStateService',function()
    {

        var states = [{ "stateName": "TN" }, { "stuffId": "AP" }];
        var obj={
            stateName:"KN"
        }


        httpBackend.whenPOST('https://localhost:3000/wonderlust/addState',obj).respond(obj);
        var deferredResponse =  service.addStateServiceObj();
        var stateData;
        deferredResponse.then(function(response){

            stateData = response.data;

        });

        httpBackend.flush();

        expect(obj).toEqual(stateData);

    })



})
