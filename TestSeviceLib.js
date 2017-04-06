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
        httpBackend.whenGET("https://www.whizapi.com/api/v2/util/ui/in/indian-states-list?project-app-key=vlubq5he9ngkiikqroseoxsf").respond({
           states: [
                    {
                        data: {
                            stateName: "TamilNadu"
                        }
                    },
                    {
                        data: {
                            stateName: "Kerala"
                        }
                    },
                    {
                        data: {
                            stateName: "Karnataka"
                        }
                    },
                    {
                        data: {
                            stateName: "AP"
                        }
                    }
                ]

        });

        service.stateServiceObj().then(function(response) {
            console.log(response.states[0].data.stateName);
            expect(response.states[0].data).toEqual("TamilNadu");
            $httpBackend.flush();
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