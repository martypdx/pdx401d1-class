var app = require('../app');

var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

var expect = chai.expect;

describe('pet app', function(){
   
    it.skip('renders pets on get /pets', function(done){
        chai.request(app)
            .get('/pets')
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            });
   });
});
