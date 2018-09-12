$(function() {
    /* RSS feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* Tests to make sure that the
         * allFeeds variable has been defined and that it is not empty.
         */
         // allFeeds.forEach(function(feed){
         //   expect(feed.url).toBeDefined();
         // });
         /*forEach method is better*/

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Loops through each feed
         *in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('has a url', function(){
           for(i = 0; i < allFeeds.length; i++){
             expect(allFeeds[i].url).toBeDefined();
             expect(allFeeds[i].url.length).not.toBe(0);
           };
         });

        /* Loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('has a name', function(){
           for(i = 0; i < allFeeds.length; i++){
             expect(allFeeds[i].name).toBeDefined();
             expect(allFeeds[i].name.length).not.toBe(0);
           };
         });
    });

    describe('The menu',function () {

      /*Test that ensures the menu element is
       * hidden by default.
       */
       it('is hidden by default',function(){
      expect($('body').hasClass('menu-hidden')).toEqual(true);
       });

       /* Test that ensures the menu changes
        * visibility when the menu icon is clicked. This test
        * should have two expectations: does the menu display when
        * clicked and does it hide when clicked again.
        */
      it('toggles visibility when clicked', function(){
        $('.menu-icon-link').click();
        expect($('body').hasClass('menu-hidden')).toBe(false);         $('.menu-icon-link').click();
         expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });


    describe('Initial Entries', function(){
      /* Test that ensures when the loadFeed
       * function is called and completes its work, there is at least
       * a single .entry element within the .feed container.
       */
       beforeEach( function(done){
         loadFeed(0,done);
       });

       it('has single entry within feed', function(){
         var entry = $('.entry');
         expect(entry.length).toBeGreaterThan(0);
       });
    });


    describe('New Feed Selection',function() {
      /* Test that ensures when a new feed is loaded
       * by the loadFeed function that the content actually changes.
       */
        var entriesStart;
        var entriesEnd;
       $('.feed').empty();

       beforeEach(function(done){
         loadFeed(0, function(){
         entriesStart = $('.feed').find(allFeeds.url);
           done();

           loadFeed(1, function(){
           entriesEnd = $('.feed').find(allFeeds.url);
            done();
          });
            });
              });



       it('new feed is not the same as the old', function(){
         expect(entriesStart).not.toEqual(entriesEnd);

       });
    });

}());
