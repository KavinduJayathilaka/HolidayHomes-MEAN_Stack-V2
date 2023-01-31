let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server/index");

//Assertion Style
chai.should();

chai.use(chaiHttp);

describe('Rentals API', () => {

    /**
     * Test the GET route
     */

    //get all rentals

    describe("GET /api/v1/rentals", () => {
        it("This should GET all the rentals", (done) => {
            chai.request(server)
                .get("/api/v1/rentals")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    done();
                });
        });

        it("This should NOT GET all the rentals", (done) => {
            chai.request(server)
                .get("/api/v1/rental")
                .end((err, response) => {
                    response.should.have.status(404);
                    done();
                });
        });

    });

    //get all bookings

    describe("GET /api/v1/bookings", () => {
        it("This should GET all the bookings", (done) => {
            chai.request(server)
                .get("/api/v1/bookings")
                .end((err, response) => {
                    response.should.have.status(200);
                    done();
                });
        });

        it("This should NOT GET all the bookings", (done) => {
            chai.request(server)
                .get("/api/v1/booking")
                .end((err, response) => {
                    response.should.have.status(404);
                    done();
                });
        });

    });

    //get all users

    describe("GET /api/v1/users", () => {
        it("This should GET all the users", (done) => {
            chai.request(server)
                .get("/api/v1/users")
                .end((err, response) => {
                    response.should.have.status(404);
                    done();
                });
        });

        it("This should NOT GET all the users", (done) => {
            chai.request(server)
                .get("/api/v1/users")
                .end((err, response) => {
                    response.should.have.status(404);
                    done();
                });
        });

    });


    /**
     * Test the POST login
     */
    describe("POST /api/v1/users/login", () => {
        it("This should POST a new login", (done) => {
            const login = {
                email: "testuser@gmail.Com",
                password: "123456"
            };
            chai.request(server)
                .post("/api/v1/users/login")
                .send(login)
                .end((err, response) => {
                    response.should.have.status(200);
                    done();
                });
        });

        it("It should NOT POST a new login without the Password property", (done) => {
            const login = {
                email: "testuser@gmail.Com",
            };
            chai.request(server)
                .post("/api/v1/users/login")
                .send(login)
                .end((err, response) => {
                    response.should.have.status(422);
                    done();
                });
        });

    });

});



