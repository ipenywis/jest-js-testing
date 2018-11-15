const utils = require("../index");

describe("Testing Utils", () => {
  test("URL Regex Validation", () => {
    let testURL = "https://google.com";
    expect(utils.isURL(testURL)).toBeTruthy();
    expect(utils.isURL("htt:/facebook.com")).toBeTruthy();
  });

  test("Object Concatenation", () => {
    let obj1 = { name: "alex", carrer: "web dev" };
    let obj2 = { name: "olly", age: 27 };
    expect(utils.contactObjs({}, {})).toEqual({});
    expect(utils.contactObjs(obj1, obj2)).toHaveProperty("job");
  });
});
