var runSpec = 1;
class SampleData {
  setSpecRun(flag) {
    runSpec = flag;
  }
  canSpecRun() {
    if (!(runSpec)) {
      return pending("Spec execution Stopped");
    }
  }
}
module.exports = new SampleData();