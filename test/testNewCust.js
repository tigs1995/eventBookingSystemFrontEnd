// var assert = require("assert");
// var webdriver = require("selenium-webdriver");
// require("geckodriver");
// var chrome = require('selenium-webdriver/chrome');
// var path = require('chromedriver').path;
// const serverUri = "http://localhost:2095/NewCustomer#";
// const appTitle = "Event Booking System";
// var service = new chrome.ServiceBuilder(path).build();
// chrome.setDefaultService(service);
 
// var browser = new webdriver.Builder()
//     .withCapabilities(webdriver.Capabilities.chrome())
//     .build();
 
// /**
//  * Config for Chrome browser
//  * @type {webdriver}
//  */
 
// function logTitle() {
//     return new Promise((resolve, reject) => {
//      browser.getTitle().then(function(title) {
//       resolve(title);
//      });
//     });
//    }

//    describe("New Customer Page", function() {
// 	/**
// 	 * Test case to load our application and check the title.
// 	 */
// 	it("Should load the new customer page and get title", function(done) {
// 		return new Promise((resolve, reject) => {
// 			browser
// 				.get(serverUri)
// 				.then(logTitle)
// 				.then(title => {
// 					assert.strictEqual(title, appTitle);
//                     resolve();
//                 })
//                 done()
// 				.catch(err => reject(err));
//         });
//     });

// 	/**
// 	 * Test case to check whether the given element is loaded.
// 	 */
// 	it("Should check whether the given element is loaded", function () {
//         browser.get(serverUri)
//         browser.findElement({ id: 'submitButton' }).click().then(function() {
        
//         return new Promise((resolve, reject) => {
//             browser
             
//              .then(logTitle)
//              .then(title => {
//               assert.equal(title, appTitle);
//               resolve();
//              })
//              .catch(err => reject(err));
//            });
//         });
//     });

//     it("Should check whether submit button takes you to right page when correct info is added", function () {
//         browser.get(serverUri);
//         browser.findElement({ id: 'firstName'}).sendKeys("Tigs");
//         browser.findElement({ id: 'lastName'}).sendKeys("Knowles");
//         browser.findElement({ id: 'phone'}).sendKeys("07293849586");
//         browser.findElement({ id: 'email'}).sendKeys("someone@hotmail.com");
//         browser.findElement({ id: 'submitButton' }).click().then(function() {
        
//         return new Promise((resolve, reject) => {
//             browser
             
//              .getCurrentUrl()
//              .then(title => {
//               assert.equal(title, "http://localhost:8095/ThankYou");
//               resolve();
//              })
//              .catch(err => reject(err));
//            });
//         });
//     });

// 	/**
// 	 * End of test cases use.
// 	 * Closing the browser and exit.
// 	 */
// 	after(function() {
// 		// End of test use this.
// 		browser.quit();
// 	});
// });