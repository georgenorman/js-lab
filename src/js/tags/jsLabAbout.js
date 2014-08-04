/*
 ~ Copyright (c) 2014 George Norman.
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ --------------------------------------------------------------
 ~ Renders <js-lab-about> tags - sharable among all projects.
 ~ --------------------------------------------------------------
 */

/*
 * The <js-lab-about> tag renders a common introduction, displayed across all of the
 * ThruZero JS Lab projects and pages. There can be only one Introduction section per page.
 *
 * Example:
 *
 *   <js-lab-about style="margin-top:12px;"/>
 */
var jsLabAboutTag = (function(tzDomHelper, tzCustomTagHelper) {
  "use strict";

  // http://stackoverflow.com/questions/805107/creating-multiline-strings-in-javascript
  var template =
      ['This page contains example code used for the <a href="http://www.thruzero.com/jcat3/apps/resources/resources.jsf?rid=javascript.overview">JavaScript Summary</a>',
        'at <a href="http://www.thruzero.com/">ThruZero</a>. ',
        'The example code is defined with inline-templates and then rendered live, so it will always match the rendered example. '
      ].join('\n');

  return {
    getTagName: function() {
      return "js-lab-about";
    },

    /**
     * Render the first <js-lab-about> tag on the page - only one tag per page is supported.
     */
    renderAll: function() {
      tzCustomTagHelper.renderFirst(this);
    },

    /**
     * Render the <js-lab-about> tag identified by the given tagId.
     *
     * @param tagId ID of the tag to render.
     */
    renderTagById: function(tagId) {
      tzCustomTagHelper.renderTagById(this, tagId);
    },

    /**
     * Render the given aboutTagNode.
     *
     * @param aboutTagNode the node to retrieve the attributes from and then render the result to.
     */
    renderTag: function(aboutTagNode) {
      this.render(aboutTagNode);
    },

    /**
     * Render the 'About Application' HTML, into the given containerNode.
     *
     * @param containerNode where to render the result.
     */
    render: function(containerNode) {
      containerNode.style.display = 'block';

      //var template = tzCustomTagHelper.getTemplate(this.getTagName() + "Template"); // @-@:p1(geo) Experimental

      tzCustomTagHelper.renderTagFromTemplate(containerNode, template, {});
    }
  }
}(tzDomHelperModule, tzCustomTagHelperModule));
