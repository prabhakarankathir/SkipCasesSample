# SkipCasesSample
SkipCasesSample project uses mocha framework and webdriver io. It is a sample implementation of skipping the test cases when one of the case inside the describe block fails.

## Pending Specs
-We have implemented the skip cases concept by using pending blocks. After each test runs we are verifying in the afterTest (wdio.confi.js) to check the result of the executed Test cases. 
-Incase if the test had failed we are setting a flag value in sampledata.js file. 
-In the specs file inside each tests we check the value of the flag which return pending incase if the previous test had failed, which skips the following test cases untill the flag value is reset.

## Reports
In the Generated Allure reports we can see that the Skipped tests are marked as Skipped in the reports also.

## Limitations
We tried to implement this skip cases feature in the afterTest methods but the pending method didn't work and so only we had to check this inside each and every spec. 

