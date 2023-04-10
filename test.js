describe("search function test", function () {
  

  it("should always return an empty array if the input is not found or not a str", function () {
    expect(search().length).toEqual(0);
    expect(search()).toEqual([]);
    expect(search(1)).toEqual([]);
    expect(search(true)).toEqual([]);
    expect(search("")).toEqual([]);
    expect(search("~")).toEqual([]);
    expect(search(NaN)).toEqual([]);
    expect(search(null)).toEqual([]);
  });

  it("should return the search results in an arry if found", function () {
    expect(search("apple")).toEqual(["Apple", "Custard apple", "Pineapple"]);
    expect(search("APPLE")).toEqual(["Apple", "Custard apple", "Pineapple"]);
    expect(search("aPpLe")).toEqual(["Apple", "Custard apple", "Pineapple"]);
    expect(search("   aPpLe")).toEqual(["Apple", "Custard apple", "Pineapple"]);
  });

});
