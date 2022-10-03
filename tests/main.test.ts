import { MainNumber } from "../src/core/MainNumber";
// jest.mock("../src/core/MainNumber");

describe("MainNumber", () => { 
  beforeAll(() => {
   
  });
  afterEach(() => {
    jest.resetAllMocks();
  });
  it("should mock MainNumber class", () => {
     const spy = jest.spyOn(MainNumber.prototype, "caculateScale");
    spy.mockImplementation(() => { 
    });
    const main = new MainNumber();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

