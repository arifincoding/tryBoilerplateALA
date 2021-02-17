jest.mock("../models");

const model = require("../models");
const { fetchUser, index } = require("./home");

//fixture
const fakeReturn = {
  status: 200,
  messages: "fetched",
  data: [],
};

describe("testing homeService/Controller", () => {
  describe("testing  fetchUser function", () => {
    let result = null;
    let req = null;
    let res = null;

    beforeEach(async () => {
      req = jest.fn();
      res = {
        json: jest.fn().mockImplementation((fakeReturn) => fakeReturn),
      };
    });

    it("should have returned", async () => {
      result = await fetchUser(req, res);
      expect(result).toEqual(fakeReturn);
    });

    it("should have model and res.json has been called", async () => {
      model.users = {
        findAll: jest.fn(),
      };

      await fetchUser(req, res);

      expect(res.json).toHaveBeenCalledWith(fakeReturn);
      expect(model.users.findAll).toHaveBeenCalled();
    });
  });

  describe("testing index function", () => {
    it("should have return 201 if req.params.number is odd value", () => {
      const request = {
        params: {
          number: 1,
        },
      };

      const response = {};
      response.status = jest.fn().mockReturnValue(response);
      response.json = jest.fn().mockReturnValue(response);

      const result = index(request, response);
      expect(response.status).toHaveBeenCalledWith(201);
      expect(result).toEqual(response);
    });

    it("should have return 200 if req.params.number is even value", () => {
      const request = {
        params: {
          number: 2,
        },
      };

      const response = {};
      response.status = jest.fn().mockReturnValue(response);
      response.json = jest.fn().mockReturnValue(response);

      const result = index(request, response);
      expect(response.status).toHaveBeenCalledWith(200);
      expect(result).toEqual(response);
    });
  });
});
