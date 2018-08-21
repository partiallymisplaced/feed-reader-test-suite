 /* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* A test that loops through each feed in the allFeeds
         * object and ensures it has a URL defined and that
         * the URL is not empty.
         */
         it('have URLs defined and not empty', function() {
           for(var i = 0; i < allFeeds.length; i++) {
             expect(allFeeds[i].url).toBeDefined();
             expect(allFeeds[i].url).not.toBe('');
           }
         });


        /* A test that loops through each feed in the allFeeds object
         * and ensures it has a name defined and that the name is
         * not empty.
         */

         it('have names defined and not empty', function() {
           for(var i = 0; i < allFeeds.length; i++) {
             expect(allFeeds[i].name).toBeDefined();
             expect(allFeeds[i].name).not.toBe('');
           }
         });
    });

    /* New test suite named "The menu" */
    describe('The menu', function() {
      /* A test that ensures the menu element is hidden by default. */

      var feedReader = document.querySelector('body');
      var iconLink = document.querySelector('.menu-icon-link');

      it('is hidden by default', function() {
        expect(feedReader.classList).toContain('menu-hidden');
      });

      /* A test that ensures the menu changes
      * visibility when the menu icon is clicked.
      * Simulates clicking by calling the .click()
      * method on the menu icon
      */

      it('shows and hides when clicked', function() {

        iconLink.click();
        expect(feedReader.classList).not.toContain('menu-hidden');

        iconLink.click();
        expect(feedReader.classList).toContain('menu-hidden');
      });
    });

    /* New test suite named "Initial Entries" */
    describe('Initial Entries', function() {

      /* TODO: Write a test that ensures when the loadFeed
      * function is called and completes its work, there is at least
      * a single .entry element within the .feed container.
      * Remember, loadFeed() is asynchronous so this test will require
      * the use of Jasmine's beforeEach and asynchronous done() function.
      */

      it('are added on load', function() {

      });

    });


    /* New test suite named "New Feed Selection" */
    describe('New Feed Section', function() {

      /* TODO: Write a test that ensures when a new feed is loaded
      * by the loadFeed function that the content actually changes.
      * Remember, loadFeed() is asynchronous.
      */

      it('changes when a new feed is loaded', function() {

      });

    });

}());
