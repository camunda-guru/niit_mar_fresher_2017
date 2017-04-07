/**
 * Created by BALASUBRAMANIAM on 06-04-2017.
 */
var chai=require('chai');
var expect  = require("chai").expect;
var chaiHttp=require('chai-http');
chai.use(chaiHttp);

var request = require('request'),
    assert = require('assert'),
    expressServer = require("../ExpressApi/app.js"),
    base_url = "http://localhost:3000/";
describe("Express Server", function() {
    describe("GET /", function() {
        it("returns status code 200", function(done) {
            request.get(base_url, function(error, response, body) {
                //expect(response.statusCode).toBe(200);
                assert.equal(200, response.statusCode);

                done();
            });
        });

        it("returns Hello World", function(done) {
            request.get(base_url, function(error, response, body) {
                //expect(body).toBe("Express sending Data");


                assert.equal("Express sending Data", body);

                done();
            });
        });
    });
});


describe("Login Test Suite", function() {
    it("Testing Post Request using Mocha", function(done) {
        chai.request( base_url).post("login")
            .set('Content-Type', 'application/json')
            .send({"username":"eswari"})
            .end(function(err,res,body){

                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                console.log(res.body);
                assert.deepEqual(res.body, {
                    username:"eswari"
                });

                done();
            })
    });
});

