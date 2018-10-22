// var assert = require('assert');
// var selenium = require('selenium-webdriver');
// // var test = require('selenium-webdriver/testing');
// { describe, it, afterEach, beforeEach}  require('selenium-webdriver/testing');
//
// const timeOut = 15000;
//
// describe('placing happy path order', function() {
//     this.timeout(timeOut);
//     it('calculates weights', function() {
//         var driver = new selenium.Builder().
//         withCapabilities(selenium.Capabilities.firefox()).
//         build();
//
//         driver.get("https://wiivv.com");
//
//         // driver.isElementPresent(selenium.By.id('wt')).then(function(weight) {
//         //     assert.equal(weight, true, "Weight entry not possible");
//         // });
//
//         driver.quit();
//     });
// });

const webdriver =  require('selenium-webdriver');
{ describe, it, afterEach, beforeEach}  require('selenium-webdriver/testing');
// const mocha = require('mocha');
// const describe = mocha.describe;
// const it = mocha.it;
// const test = require('selenium-webdriver/testing');


describe('acceptance.wiivv.checkout.happy.path', function () {
    // this.timeout(65000);

    beforeEach(function () {
        const driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
        // driver.get('https://wiivv.com/products/mens-custom-sandals');
        driver.get('https://wiivv.com/');
        // driver.sleep(1000);
    });

    afterEach(function () {
        const driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
        driver.quit();
    });

    describe('Checking out as a client', function() {

        it('should be able to add items to the cart and checkout', function() {
            const driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
            driver.manage().setTimeouts({implicit: (45000)});
             driver.findElement(webdriver.By.css("//*[@id=\"shopify-section-v3-home-hp-hero\"]/div/div/div/div[3]/a[1]"));
            // driver.findElement(webdriver.By.css('hero-btn:nth-child(1)')).click();
            // driver.findElement(webdriver.By.css('product-single__add-to-cart button')).click();
            // driver.findElement(webdriver.By.css('modal-go-to-cart .btn')).click();
            // driver.findElement(webdriver.By.css('div a.text-link:contains("Sign in")')).click();
            // driver.findElement(webdriver.By.css('div.input-field__flex___1uhNL input:first')).sendKeys('qa_test@gmail.com');
            // driver.findElement(webdriver.By.css('div.input-field__flex___1uhNL input:last')).sendKeys('password123');
            // driver.findElement(webdriver.By.css('button.submit-button__button-wiivv___1-epr')).click();
            // driver.findElement(webdriver.By.css('field__input-wrapper .field__label:nth(0)')).sendKeys('jim');
            // driver.findElement(webdriver.By.css('field__input-wrapper .field__label:nth(1)')).sendKeys('bob');
            // driver.findElement(webdriver.By.css('field__input-wrapper .field__label:nth(2)')).sendKeys('3178 Dayanee Springs Boulevard, BC, Canada');
            // //assert that the other fields are filled out
            // driver.findElement(webdriver.By.css('field__input-wrapper .field__label:nth(7)')).sendKeys('6042222222');
            // driver.findElement(webdriver.By.css('step__footer__continue-btn')).click();
            // driver.findElement(webdriver.By.css('step__footer__continue-btn')).click();





            // andThen(() => {
            //
            // });
        });
    });
});

// happy path checkout test
// click on sandals nav $('.site-nav__item a:contains("Sandals")');
// click on shop mens ('.btn--wiivv_second a:contains(`Shop Men`)')
// click add to cart button $('.product-single__add-to-cart button').click();
//click go to cart from modal $('#modal-go-to-cart .btn')
//click sign in $('div a.text-link:contains("Sign in")')
//enter email address $('div.input-field__flex___1uhNL input');
//enter password $('div.input-field__flex___1uhNL input'); - figure out how to select by placeholder?
// click sign in $('button.submit-button__button-wiivv___1-epr')
// fill in first name $('.field__input-wrapper .field__label:nth(0)');
// fill in last name $('.field__input-wrapper .field__label:nth(1)');
// fill in address $('.field__input-wrapper .field__label:nth(2)');
// fill in apartment $('.field__input-wrapper .field__label:nth(3)');
// fill in city $('.field__input-wrapper .field__label:nth(5)');
// fill in postal code $('.field__input-wrapper .field__label:nth(6)');
// fill in phone $('.field__input-wrapper .field__label:nth(7)');
// click continue to shipping method $('.step__footer__continue-btn');
// click continue to payment method $('.step__footer__continue-btn');
//enter credit card
// enter name
// enter expiration date
//enter cvv
// click checkout
// error on checkout text $('.notice--error').text();
//CLEANUP
// click cart icon $('.icon-cart')
// remove item from cart $('button .icon-minus')
