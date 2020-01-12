var assert = require("assert");
var webdriver = require("selenium-webdriver");
require("geckodriver");
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;
const serverUri = "http://localhost:2095/#";
const appTitle = "Event Booking System";
var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);
 
var browser = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();
 
/**
 * Config for Chrome browser
 * @type {webdriver}
 */
 
function logTitle() {
    return new Promise((resolve, reject) => {
     browser.getTitle().then(function(title) {
      resolve(title);
     });
    });
   }

   describe("Home Page", function() {
	/**
	 * Test case to load our application and check the title.
	 */
	it("Should load the home page and get title", function(done) {
		return new Promise((resolve, reject) => {
			browser
				.get(serverUri)
				.then(logTitle)
				.then(title => {
					assert.strictEqual(title, appTitle);
                    resolve();
                })
                done()
				.catch(err => reject(err));
        });
    });

	/**
	 * Test case to check whether the given element is loaded.
	 */
	it("Should check whether the given element is loaded", function () {
        browser.get(serverUri)
        browser.findElement({ id: 'yesButton' }).click().then(function() {
        
        return new Promise((resolve, reject) => {
            browser
             
             .then(logTitle)
             .then(title => {
              assert.equal(title, appTitle);
              resolve();
             })
             .catch(err => reject(err));
           });
        });
    });

    it("Should check whether yes button takes you to right page", function () {
        browser.get(serverUri)
        browser.findElement({ id: 'yesButton' }).click().then(function() {
        
        return new Promise((resolve, reject) => {
            browser
             
             .getCurrentUrl()
             .then(title => {
              assert.equal(title, "http://localhost:8095/ExistingCustomer");
              resolve();
             })
             .catch(err => reject(err));
           });
        });
    });

    it("Should check whether no button takes you to right page", function () {
        browser.get(serverUri)
        browser.findElement({ id: 'noButton' }).click().then(function() {
        
        return new Promise((resolve, reject) => {
            browser
             
             .getCurrentUrl()
             .then(title => {
              assert.equal(title, "http://localhost:8095/NewCustomer");
              resolve();
             })
             .catch(err => reject(err));
           });
        });
    });

   

	/**
	 * End of test cases use.
	 * Closing the browser and exit.
	 */
	after(function() {
		// End of test use this.
		browser.quit();
	});
});
