const users = require('../routes/users')
const user = require('../models/user')
const supertest = require('supertest');
const mongoose = require("mongoose");
const app = require("../server");


const data = { name: "TestName", dob: "07/04/1999", description: "Currently learning nodeJs", address: "Hyderabad" };

  describe("Testing the users API", () => {

    it("tests saving of a new user", async () => {
		const response = await supertest(app).post('/api/users').send(data);
        expect(response.status).toBe(200);
        expect(response.body._id).toBeTruthy();
        expect(response.body.name).toBe(data.name)
    });
    
    it("tests the error response while saving of a new user", async () => {
		const response = await supertest(app).post('/api/users').send({name: 'someName'});
        expect(response.status).toBe(500);
	});

	it("tests error response of the api for unknown user ", async () => {
		const response = await supertest(app).get('/api/users/60a20738effdfe2a2d6c44d1');
		expect(response.status).toBe(404);

    });
    
    it("tests the get user API ", async () => {
		const response = await supertest(app).get('/api/users/60a20738effdfe2a2d6c44d0');
		expect(response.status).toBe(200);

	});

});