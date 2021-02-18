jest.mock("../models");

const model = require("../models");
const { fetchUser, checkNumber } = require("./homeService");

describe("homeService", () => {
  describe("fetchUser function", () => {
    it("should have returned", async () => {
      model.users = {
        findAll: jest.fn().mockReturnValue(Promise.resolve(true)),
      };

      const result = await fetchUser();

      expect(model.users.findAll).toHaveBeenCalled();
      expect(result).toEqual(true);
    });
  });

  describe("checkNumber function", () => {
    it("should return true if value is even", () => {
      expect(checkNumber(2)).toEqual(true);
    });

    it("should return false if value is odd", () => {
      expect(checkNumber(1)).toEqual(false);
    });
  });
});
