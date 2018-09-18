/* feedreader.js */

// This spec file contains the tests requred to be run against the application.

// The $() function was provided and used to ensure tests don't run until the DOM is ready

$(function() {

  // RSS Feeds test suite
  describe('RSS Feeds', function() {

    // Checks that allFeeds has been defined an not empty
    // This was provided by the initial Udacity code
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    // Loops trough each feed item in the allFeeds object and checks that a URL is defined and not empty
    it('have URLs defined and not empty', function() {
      for (var i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].url).toBeDefined();
        expect(allFeeds[i].url).not.toBe('');
      }
    });

    // Loops trough each feed item in the allFeeds object and checks that a name is defined and not empty
    it('have names defined and not empty', function() {
      for (var i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].name).toBeDefined();
        expect(allFeeds[i].name).not.toBe('');
      }
    });
  });

  // "The menu" test suite
  describe('The menu', function() {

    var feedReader = document.querySelector('body');
    var iconLink = document.querySelector('.menu-icon-link');

    // Checks that the menu element is hidden by default
    it('is hidden by default', function() {
      expect(feedReader.classList).toContain('menu-hidden');
    });

    // Checks that the menu changes visibility when the menu icon is clicked.
    // Simulates clicks by calling the .click() method on the menu item
    it('shows and hides when clicked', function() {

      iconLink.click();
      expect(feedReader.classList).not.toContain('menu-hidden');

      iconLink.click();
      expect(feedReader.classList).toContain('menu-hidden');
    });
  });

  // "Initial Entries" test suite
  describe('Initial Entries', function() {

    // Setup: Calls the loadFeed function with the first resource in the feed
    beforeEach(function(done) {
      loadFeed(0, function() {
        done();
      });
    });

    // Checks that there is at least one .entry element within the feed container after the loadFeed() async function is done running
    it('are added on load', function(done) {

      // Selects the .feed element
      var liveFeed = document.querySelector('.feed');

      // Checks that the Feed has at least one child, and that the child contains an element with a class of entry
      expect(liveFeed.children[0].children[0].classList).toContain('entry');
      done();
    });

  });

  // "New Feed Selection" test suite
  describe('New Feed Section', function() {

    var liveFeed = document.querySelector('.feed');

    var feedOne;
    var feedTwo;

    // Loads the first feed
    beforeEach(function(done) {
      loadFeed(0, function() {
        feedOne = liveFeed.innerHTML;
        loadFeed(1, function() {
          feedTwo = liveFeed.innerHTML;
          done();
        });
      });
    });

    // // Loads the first feed
    // beforeEach(function(done) {
    //   loadFeed(0, function() {
    //     feedOne = liveFeed.innerHTML;
    //     done();
    //   });
    // });
    //
    // // Loads the second feed
    // beforeEach(function(done) {
    //   loadFeed(1, function() {
    //     feedTwo = liveFeed.innerHTML;
    //     done();
    //   });
    // });

    // Checks that the content changes after a new feed is loaded via the loadFeed() async function
    it('changes when a new feed is loaded', function(done) {
      expect(feedOne).not.toBe(feedTwo);
      done();
    });
  });

}());
