'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('zimlabApp')
    .directive('fileUpload', function ($http, $sce, NavigationService, toastr) {
        return {
            restrict: 'E',
            scope: {
                model: '=ngModel',
                extensions: '=extensions', //It is used for validate extensions.
                maxSize: '@maxSize', //- It is used for defined maximum size of file to be uploaded.
            },
            templateUrl: 'directives/file-upload/uploadFile.html',
            link: function (scope, element, attrs) {
                scope.noShow = false;
                scope.multiple = false;

                //- Check if max size file defined or not else set it 10 MB
                if (_.isUndefined(scope.maxSize)) {
                    // scope.maxSize = 5242880;
                    scope.maxSize = 10485760;
                }

                if (attrs.multiple == '' || attrs.multiple == 'multiple') {
                    scope.multiple = true;
                }

                if (scope.multiple) {
                    if (!scope.model) {
                        scope.model = [];
                    }
                } else {
                    if (scope.model) {
                        var fileName = _.split(scope.model, '.');
                        var fileType = fileName[1];
                        scope.isPhoto = (fileType == 'jpg' || fileType == 'jpeg' || fileType == 'png');
                        scope.isPdf = (fileType == 'pdf');
                        scope.isDocs = (fileType == 'doc' || fileType == 'docx');
                        scope.isOtherFile = !scope.isPhoto && !scope.isPdf && !scope.isDocs;
                    }
                }

                scope.uploadImage = function (files) {
                    console.log("files : ", files)
                    // If not already a list, make it a list
                    $(".file-upload").addClass('active');
                    if (!files.length) {
                        files = [files];
                    }
                    if (scope.multiple == true) {
                        $("#noFile").text(files.length);
                    } else {
                        $("#noFile").text(files[0].name);
                    }
                    scope.file = {};
                    scope.file.files = files;
                    scope.errorFiles = [];
                    //var uploadPath = "http://104.197.192.46:1337/Config/uploadFiles";
                    // var uploadPath = "http://localhost:1337/Config/uploadFiles";
                    var uploadPath = "http://35.198.244.0:1337/Config/uploadFiles";
                    scope.url = uploadPath;
                    if (scope.localUpload == true) {
                        scope.url = localUploadPath;
                    }

                    var fd = new FormData();

                    //- Check file validation
                    for (var i = 0; i < files.length; i++) {
                        if (files[i].size <= scope.maxSize) {
                            // var fileExtension = files[i].name.split(".").pop();
                            // if (_.includes(scope.extensions, fileExtension)) {
                            fd.append("file", files[i])
                            // } else {
                            //     scope.file.files[i].reason = $sce.trustAsHtml("The <b>" + fileExtension + "</b> file extension not allow");
                            //     scope.errorFiles.push(scope.file.files[i]);
                            // }
                        } else {
                            scope.file.files[i].reason = $sce.trustAsHtml("Exceeds the maximum upload <b>size</b>");
                            scope.errorFiles.push(scope.file.files[i]);
                        }
                    }
                    //-End Check file validation

                    var xhr = new XMLHttpRequest()
                    xhr.upload.addEventListener("progress", uploadProgress, false)
                    xhr.addEventListener("load", uploadComplete, false)
                    xhr.addEventListener("error", uploadFailed, false)
                    xhr.addEventListener("abort", uploadCanceled, false)
                    xhr.open("POST", scope.url)
                    scope.progressVisible = true
                    xhr.send(fd)
                }

                //- This event is showing progress
                function uploadProgress(evt) {
                    scope.$apply(function () {
                        if (evt.lengthComputable) {
                            scope.progress = Math.round(evt.loaded * 100 / evt.total)
                        } else {
                            scope.progress = 'unable to compute'
                        }
                    })
                }

                //- This event is raised when the server send back a response
                function uploadComplete(evt) {
                    var respo = JSON.parse(evt.target.response);
                    if (scope.multiple == true) {

                        // Push uploaded files to model
                        _.each(respo.data.uploaded, function (val) {
                            scope.model.push(val);
                        });

                    } else {
                        scope.model = respo.data.uploaded[0];
                    }
                    setProgressFlag();
                }

                //- Hide Progress bar
                function setProgressFlag() {
                    setTimeout(function () {
                        scope.$apply(function () {
                            scope.progressVisible = false;
                        }, 5000);
                    });
                }

                function uploadFailed(evt) {
                    console.log("There was an error attempting to upload the file.");
                }

                function uploadCanceled(evt) {
                    scope.$apply(function () {
                        scope.progressVisible = false
                    })
                    console.log("The upload has been canceled by the user or the browser dropped the connection.");
                }

                //- Remove error well-box
                scope.removeError = function (index) {
                    scope.errorFiles.splice(index, 1);
                }

                //- Remove file from model and call removeGCS
                scope.removeFiles = function (index, fileName, multiple) {
                    if (multiple == true) {
                        scope.model.splice(index, 1);
                    } else {
                        scope.model = "";
                    }
                    scope.removeFileFromGCS(fileName)
                }

                //- This is use to remove file from GCS.
                scope.removeFileFromGCS = function (fileName) {
                    NavigationService.apiCall('Config/deleteFiles', {
                        fileName: fileName
                    }, function (data) {
                        if (data.data) {
                            if (data.data.deletedFiles.length > 0) {
                                toastr.success("", "File Deleted Successfully.");
                            } else {
                                toastr.error("", "There was no file deleted");
                            }

                        } else {
                            toastr.error("", "There was an error while deleting file");
                        }
                    });
                }
            }
        };
    })

    // Directive for pie charts, pass in title and data only    
    .directive('hcPieChart', function () {
        return {
            restrict: 'E',
            template: '<div></div>',
            scope: {
                title: '@',
                data: '='
            },
            link: function (scope, element) {
                Highcharts.chart(element[0], {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: null,
                        plotShadow: false,
                        type: 'pie'
                    },
                    title: {
                        text: scope.title
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                            },
                            style: {
                                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                            }
                        }
                    },
                    series: [{
                        data: scope.data
                    }]
                });
            }
        };
    });
