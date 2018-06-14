'use strict';

/**
 * @ngdoc filters
 * @name izzyposWebApp.filters:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('zimlabApp')
.filter('uploadPath', function () {
    return function (input, width, height, style) {
      var other = "";
      console.log("Image Name : ",input);
      if (!_.isUndefined(input)) {
        var fileType = _.toLower(input.split(".").pop());
        console.log("Image Extension : ",fileType);
        if (fileType == 'jpg' || fileType == 'jpeg' || fileType == 'png' || fileType == 'tif') {
          return 'https://storage.googleapis.com/zimmlab/' + input;
        } else if (fileType == ".docx") {
          return "images/extensions/doc.png";
        } else {
          return "images/extensions/" + fileType + ".png"
        }
      } else {
        return "images/extensions/nofile.png";
      }
    };
  })
