const functions = require('firebase-functions');
const admin = require('firebase-admin');
const firebase = admin.initializeApp()


exports.deletePhotos = functions.firestore
  .document("recipes/{recipeId}")
  .onDelete((snap, context) => {
    const { recipeId } = context.params;
    const bucket = firebase.storage().bucket();
    console.log(snap, context);
    return bucket.file(`${recipeId}`).delete()
  });











// const gcs = require("@google-cloud/storage")
// const spawn = require('child-process-promise').spawn;
// const path = require('path');
// const os = require('os');
// const fs = require('fs');


// exports.generateThumbnail = functions.storage.object('recipeImg/').onFinalize(async (object) => {
//   console.log(object)
//   const fileBucket = object.bucket; // The Storage bucket that contains the file.
//   const filePath = object.name; // File path in the bucket.
//   const contentType = object.contentType; // File content type.
//   const metageneration = object.metageneration; // Number of times metadata has been generated. New objects have a value of 1.
//   // // Exit if this is triggered on a file that is not an image.
//   if (!contentType.startsWith('image/')) {
//     return console.log('This is not an image.');
//   }

//   // Get the file name.
//   const fileName = path.basename(filePath);
//   // Exit if the image is already a thumbnail.
//   if (fileName.startsWith('thumb_')) {
//     return console.log('Already a Thumbnail.');
//   }
//   // Download file from bucket.
//   const bucket = admin.storage().bucket(fileBucket);
//   const tempFilePath = path.join(os.tmpdir(), fileName);
//   const metadata = {
//     contentType: contentType,
//   };
//   await bucket.file(filePath).download({ destination: tempFilePath });
//   console.log('Image downloaded locally to', tempFilePath);
//   // Generate a thumbnail using ImageMagick.
//   await spawn('convert', [tempFilePath, '-thumbnail', '200x200>', tempFilePath]);
//   console.log('Thumbnail created at', tempFilePath);
//   // We add a 'thumb_' prefix to thumbnails file name. That's where we'll upload the thumbnail.
//   const thumbFileName = `thumb_${fileName}`;
//   const thumbFilePath = path.join(path.dirname(filePath), thumbFileName);
//   // Uploading the thumbnail.
//   await bucket.upload(tempFilePath, {
//     destination: thumbFilePath,
//     metadata: metadata,
//   });
//   // Once the thumbnail has been uploaded delete the local file to free up disk space.
//   return fs.unlinkSync(tempFilePath);

// });
