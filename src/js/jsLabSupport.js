/*
  ~ Copyright (c) 2014 George Norman.
  ~ Licensed under the Apache License, Version 2.0 (the "License");
  ~     http://www.apache.org/licenses/LICENSE-2.0
  ~
  ~ --------------------------------------------------------------
  ~ Support functions specific to 'JS Lab'.
  ~ --------------------------------------------------------------
 */

var jsLabModule = (function(tzDomHelper, tzLogHelper) {
  "use strict";

  var jsLabHome = "../../html/index.html";

  return {
    /**
     * Do page setup (e.g., render all tags).
     */
    handleOnLoad: function() {
      // enable/disable logging
      tzLogHelper.disableLogging();

      // add a link back to the JS Lab home page
      setupHeader(jsLabHome);

      // set global "back-to" links (so they don't need to be passed into each <lk-navigation-bar> tag).
      lkNavigationBarTag.setGlobalLinks({"⬅ To Index":jsLabHome, "⬆ To Table of Contents":"#tableOfContents"});

      // render the baseKit tags (these are tags that are common to all Labs)
      baseKitModule.handleOnLoad();

      // render the tags that are specific to JS Lab
      jsLabAboutTag.renderAll();

      // hide the progress bar, show content
      baseKitModule.handlePageLoadCompleted("page-load-progress");
    },

    /*
     * q:   treated as if it had been typed into the query box by the user in the Maps app (an drops a pin)
     * ll:  lat long points.
     * sll: lat long points for a business search.
     * t:   type of map to display.
     * z:   zoom level.
     *
     * see: https://developer.apple.com/library/ios/featuredarticles/iPhoneURLScheme_Reference/Articles/MapLinks.html
     */
    gotoMap: function(lat, long) {
      document.location = "http://maps.apple.com/?hl=en&q="+lat+","+long+"&t=m&z=17";
    },

    appendGotoMapLinkTo: function(id, lat, long) {
      var parent = document.getElementById(id);
      var x = tzDomHelper.createElementWithAdjacentHtml(parent, "div", '', '<a href="http://maps.apple.com/?hl=en&q='+lat+','+long+'&t=m&z=17">Go To Map</a>');
      var y = 0;
    }
  };


  // ----------------------------------------------
  // Private functions
  // ----------------------------------------------

  /** add a link back to the JS Lab home page (overlaying the logo background image in the header). */
  function setupHeader(jsLabHome) {
    var h1 = tzDomHelper.getFirstElementByTagName("h1");

    tzDomHelper.createElement(h1, "a", '{"href":"'+jsLabHome+'", "className":"labHome"}');
  }

}(tzDomHelperModule, tzLogHelperModule));
