import { jest } from "@jest/globals";

beforeEach(async () => {
  jest.resetAllMocks();
  jest.clearAllMocks();
});

describe("your test suite", () => {
  it("your test and the description", () => {
    // code goes here
    // const status = result.status;
    expect("best template").toBe("best template");
  });
});
