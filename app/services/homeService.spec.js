jest.mock("../models/users");

const modelUser = require("../models/users");
const { fetchUser, checkNumber } = require("./homeService");

describe("homeService", () => {
  describe("fetchUser function", () => {
    it("should have returned", async () => {
      modelUser.find = jest.fn().mockReturnValue(Promise.resolve(true));

      const result = await fetchUser();

      expect(modelUser.find).toHaveBeenCalled();
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
