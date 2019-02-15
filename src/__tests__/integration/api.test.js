import api from "../../services/api";

jest.setTimeout(30000);

describe("API Tests", () => {
  it("Should return a success response name", () => {
    expect(
      api.get("current?lat=-27.593500&lon=-48.558540")
    ).resolves.toMatchObject({ status: 200 });
  });

  it("Should fail with a wrong url", () => {
    expect(api.get("curren?lat=-27.593500&lon=-48.558540")).rejects.toEqual({
      error: "404"
    });
  });

  it("Should fail with a wrong coord", () => {
    expect(api.get("current?lat=-27.59350t&lon=-48.55854x")).rejects.toEqual({
      error: "404"
    });
  });
});
