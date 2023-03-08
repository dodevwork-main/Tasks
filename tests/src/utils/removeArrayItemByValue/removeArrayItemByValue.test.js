import removeArrayItemByValue from "./removeArrayItemByValue";

describe("removeArrayItemByValue", () => {
  it("should remove middle item", () => {
    const array = [1, 2, 3, 4];

    removeArrayItemByValue(array, 3);

    expect(array).toEqual([1, 2, 4]);
  });

  it("should remove first item", () => {
    const array = [1, 2, 3, 4];

    removeArrayItemByValue(array, 1);

    expect(array).toEqual([2, 3, 4]);
  });

  it("should remove last item", () => {
    const array = [1, 2, 3, 4];

    removeArrayItemByValue(array, 4);

    expect(array).toEqual([1, 2, 3]);
  });

  it("should do nothing", () => {
    const array = [1, 2, 3, 4];

    removeArrayItemByValue(array, 10);

    expect(array).toEqual([1, 2, 3, 4]);
  });
});
