const request = require("supertest");
const app = require("../app");
const db = require("../app/models");

describe("testing api e2e", () => {
  describe("endpoint /api/", () => {
    it("should have return 200 OK if params even", async () => {
      await request(app).get("/apis/2").expect(200);
    });

    it("should have return 201 if params odd", async () => {
      await request(app).get("/apis/1").expect(201);
    });
  });

  describe("endpoint /user", () => {
    it("should have return result", async () => {
      await request(app)
        .get("/apis/user")
        .expect(200)
        .then((res) => {
          expect(res.body).toEqual({
            status: 200,
            messages: "fetched",
            data: [],
          });
        });
    });
  });

  afterAll(async () => {
    await db.sequelize.close();
  });
});
