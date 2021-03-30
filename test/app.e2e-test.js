const db = require('../config/mongoose');
const mongoose = require("mongoose");
const request = require("supertest");
const redis = require("../config/redisConfig");
const app = require("../app");

describe("testing api e2e", () => {

  beforeAll((done) => {
    db.initDb();
    done();
  });

  describe("endpoint /api/", () => {
    it("should have return 200 OK if params even", async () => {
      await request(app).get("/apis/2").expect(200);
    });

    it("should have return 201 if params odd", async () => {
      await request(app).get("/apis/1").expect(201);
    });
  });

  describe("endpoint /user",() => {
    it("should have return result", async () => {
      await request(app)
        .get("/apis/user/fetch")
        .expect(200);
    });
  });

  describe("endpoint /user/get", ()=>{
    it("should have return all user data", async ()=>{
      await request(app).get("/apis/user/get").expect(200);
    });
  });

  describe("endpoint /user/insert", ()=>{
    it("should have inserted data user and return result", async ()=>{
      await request(app)
      .post('/apis/user/insert')
      .send({username:'karl',password:'12345678'})
      .set('Accept','application/json')
      .expect(200)
    })
  })

  describe("endpoint /user/get/:username",()=>{
    it("should have return selected data user by username",async()=>{
      await request(app)
      .get('/apis/user/get/karl')
      .expect(200)
    })
  })

  describe("endpoint /user/update", ()=>{
    it("should have updated selected data user by username and return result",async ()=>{
      await request(app)
      .put('/apis/user/update')
      .send({user:'karl',username:'karl','password':'87654321'})
      .set('Accept','application/json')
      .expect(200)
    })
  })

  describe("endpoint user/delete/:username",()=>{
    it("should have deleted selected data by username and return result", async ()=>{
      await request(app)
      .delete('/apis/user/delete/karl')
      .expect(200)
    })
  })

  afterAll((done) => {
    mongoose.connection.close()
    redis.quit()
    done();
  });

});
