var sampleData = require("../../testdata/sampledata.js");
afterEach(function () {
  sampleData.canSpecRun();
});
describe("Sample  Suite", function () {
  sampleData.setSpecRun(1);
  it("Test 1", function () {
    sampleData.canSpecRun();
    console.log("Inside Test 1");
  });
  //pending("Spec execution Stopped");
  it("Test 2", function () {
    sampleData.canSpecRun();
    console.log("Inside Test 2");
    //Test will fail for the below statement
    expect("Sign in").toEqual("Sign up");

  });
  sampleData.canSpecRun();
  //Following Tests will get skipped since flag value is 0
  it("Test 3", function () {
    sampleData.canSpecRun();
    console.log("Inside Test 3");
  });
  it("Test 4", function () {
    sampleData.canSpecRun();
    console.log("Inside Test 4");
  });
});