/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {

    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it('have defined non-empty URLs', function() {
            for(var i=0;i<allFeeds.length;i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);                
            }

         });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('have defined non-empty names', function() {
            for(var i=0;i<allFeeds.length;i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);                
            }

         });


    });


    describe('The menu', function() {

        /* A test that ensures the menu element is
         * hidden by default.
         */

        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });


         /* A test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * has two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

          it('changes visibility upon click', function() {
            var menuIcon = $('.menu-icon-link');
            menuIcon.trigger('click');
            expect($('body').hasClass('menu-hidden')).not.toBe(true);
            menuIcon.trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
          });


    });

    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0,function() {
                done();
            });
        });

        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */

        it('should contain at least one entry', function(done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });

    });


    describe('New Feed Selection', function() {

        var oldFirstFeed;

        beforeEach(function(done) {
            oldFirstFeed = $('.feed .entry-link .entry h2').html();


            loadFeed(1,function() {
                done();
            });
        });

        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */

        it('changes the content', function(done) {
            expect($('.feed .entry-link .entry h2').html()).not.toBe(oldFirstFeed);
            done();
        });

    });

}());
