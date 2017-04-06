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

        var httpResponse = [{ "stateName": "TN" }, { "stuffId": "AP" }];
        httpBackend.expectGET("https://www.whizapi.com/api/v2/util/ui/in/indian-states-list?project-app-key=vlubq5he9ngkiikqroseoxsf").respond(200, httpResponse);

        service.stateServiceObj().then(function(response) {

            expect(response[0].data.stateName).toBe("AP");

        });

        /*
        service.stateServiceObj().then(function(response) {
            expect(response.length).toBeGreaterThan(0);
            $httpBackend.flush();


        });
        */
    })
    it('should contain a response having length >0 in  StateService',function()
    {



         service.stateServiceObj().then(function(response) {
         expect(response.length).toBeGreaterThan(0);
         $httpBackend.flush();


         });

    })


})