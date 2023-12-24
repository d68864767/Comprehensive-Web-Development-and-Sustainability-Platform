```javascript
// Import necessary modules
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./backend');
const should = chai.should();

chai.use(chaiHttp);

// Test /GET route
describe('/GET route', () => {
    it('it should GET all the data', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });
});

// Test /POST route
describe('/POST route', () => {
    it('it should POST new data', (done) => {
        let data = {
            name: "Test",
            description: "This is a test"
        }
        chai.request(server)
            .post('/')
            .send(data)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Data successfully added!');
                res.body.data.should.have.property('name');
                res.body.data.should.have.property('description');
                done();
            });
    });
});

// More tests can be added here for other routes and functionalities
```
