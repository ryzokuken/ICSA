var Upload = require('upload-file');
var upload = (callback) => new Upload({
  dest: './developers.png',
  maxFileSize: 100 * 1024,
  acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
  rename: function(name, file) {
    console.log(this.fields);
    callback(file.filename);
  }
});
// upload.on('end', function(fields, files) {
//   if (!fields.channel) {
//     this.cleanup();
//     this.error('Channel can not be empty');
//     return;
//   }
//   callback('ok')
// });
//
// upload.on('error', function(err) {
//   callback(err)
// });
//

module.exports = {
  upload
}
