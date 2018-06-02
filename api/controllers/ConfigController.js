

//- Here GCS = (Google Cloud Storage)
var async = require('neo-async');
// var BUCKET_NAME = 'zimlab'; //- Google cloud storage bucket name
var BUCKET_NAME = 'zim-lab'; //- Google cloud storage bucket name
var path = require('path'); //- Node file uploading path of server
var Promise = require('bluebird');
var GoogleCloudStorage = Promise.promisifyAll(require('@google-cloud/storage'));

var storage = GoogleCloudStorage({
  projectId: 'zimlab-202418',
  // projectId: 'portfolio-176818'
  keyFilename: 'config/zimlabGoogleBucketKey.json'
})

var controller = {

  //Send Upload files to GCS
  uploadFiles: function (req, res) {
    var uploadFile = req.file('file');
    uploadFile.upload(function onUploadComplete(err, files) {
      // Files will be uploaded to .tmp/uploads
      if (req.body.bucketName) {
        BUCKET_NAME = req.body.bucketName;
      }
      if (err) {
        return res.serverError(err);
        // IF ERROR Return and send 500 error with error
      } else if (files) {
        var uploadedFiles = [];
        var errorFiles = [];

        // Async Iterator function
        var iterator = function (value, done) {
          var filename = path.parse(value.fd).base;
          var newFilename = Date.now() + "---" + value.filename;

          // https://googlecloudplatform.github.io/google-cloud-node/#/docs/google-cloud/0.39.0/storage/bucket
          var myBucket = storage.bucket(BUCKET_NAME)

          // upload file to bucket
          // https://googlecloudplatform.github.io/google-cloud-node/#/docs/google-cloud/0.39.0/storage/bucket?method=upload
          var localFileLocation = '.tmp/uploads/' + filename;
          myBucket.file(newFilename);
          myBucket.uploadAsync(localFileLocation, {
              public: true, //- This image allow to public use
              //   destination: 'students/' + newFilename, //- Destination to GCS Bucket path
              destination: newFilename, //- Destination to GCS Bucket path
              resumable: false //- Uploading files larger than 5 MerrorUploadedImagesB, and the Node process consumes all CPU resource. By setting false to the resumable option, sort of fixing the problem
            })
            .then(file => {
              // file saved
              //   console.log("In google uploaded file : ",newFilename);
              fs.unlink(localFileLocation);
              uploadedFiles.push(newFilename);
              done();
            })
            .catch(err => {
              console.log("There was an error while GCS File uploading file name : ", value.filename);
              console.log(" Error : ", err);
              fs.unlink(localFileLocation);
              errorFiles.push(value.filename);
              done();
            })

        };
        async.each(files, iterator, function (err, cb) {
          res.callback(null, {
            uploaded: uploadedFiles,
            errorUploaded: errorFiles
          });
        });
      } else {
        res.callback("No Files uploaded. There was an error while uploading file. Please try again!");
      }
    });
  },

  //- Get file from GCS
  getFile: function (req, res) {
    res.redirect(`https://storage.googleapis.com/${BUCKET_NAME}/${req.query.fileName}`);
  },

  //- Check if a file exists in bucket
  checkGCSfileExist: function (req, res) {
    var fileName = req.body.fileName;
    // https://googlecloudplatform.github.io/google-cloud-node/#/docs/google-cloud/0.39.0/storage/file?method=exists
    var myBucket = storage.bucket(BUCKET_NAME);
    var file = myBucket.file(fileName);
    file.existsAsync()
      .then(exists => { //- exists give true if file available else false
        res.callback(null, {
          exist: exists
        });
      })
      .catch(err => {
        res.callback(err);
      })
  },

  //- Search File from GCS
  searchFile: function (req, res) {
    var myBucket = storage.bucket(BUCKET_NAME);
    myBucket.getFiles({
      prefix: req.body.keyword
    }, function (err, files) {
      if (err) {
        res.callback(err);
      } else if (!_.isEmpty(files)) {
        // Async Iterator function
        var fileNames = [];
        var iterator = function (value, done) {
          fileNames.push(value.name);
          done();
        };
        async.each(files, iterator, function (err, cb) {
          res.callback(null, fileNames);
        });
      } else {
        res.callback("There was an error while finding file(s).");
      }
    });
  },

  //- Delete file from GCS
  deleteFiles: function (req, res) {
    var myBucket = storage.bucket(BUCKET_NAME);
    var fileName = req.body.fileName;
    var deletedFiles = [];
    var errorFiles = [];
    if (_.isArray(fileName)) { // Delete file return no content
      // Async Iterator function
      var iterator = function (value, done) {
        myBucket.deleteFiles({
          prefix: value
        }, function (err, file) {
          if (err) {
            done(err);
          } else if (_.isEmpty(file)) {
            deletedFiles.push(value);
            done();
          } else {
            errorFiles.push(value)
            done();
          }
        });
      }
      async.each(fileName, iterator, function (err, cb) {
        res.callback(null, {
          deleted: deletedFiles,
          errorFiles: errorFiles
        });
      });
    } else if (!_.isEmpty(fileName)) {
      myBucket.deleteFiles({
        prefix: fileName
      }, function (err, file) {
        if (err) {
          res.callback(err);
        } else if (_.isEmpty(file)) {
          deletedFiles.push(fileName);
          res.callback(null, {
            deletedFiles: deletedFiles,
            errorFiles: []
          });
        } else {
          errorFiles.push(value)
          res.callback(null, {
            deletedFiles: [],
            errorFiles: deletedFiles
          });
        }
      });
    } else {
      res.callback("No Filename found!");
    }
  },

  //- Download File from GCS
  downloadFile: function (req, res) {
    if (req.query.fileName) {
      res.redirect("https://www.googleapis.com/download/storage/v1/b/" + BUCKET_NAME + "/o/" + req.query.fileName + "?alt=media");
    } else {
      res.callback("No Filename found");
    }
  }

};
module.exports = _.assign(controller);