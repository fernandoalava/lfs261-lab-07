import { add } from "../add";

describe("test add", () => {
  test("add", () => {
    expect(add(1, 1)).toStrictEqual(2);
  });
});
