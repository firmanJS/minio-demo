const AWS = require('aws-sdk')
require('dotenv').config();
// Initializing S3 Interface
const localSetup = {
   endpoint: process.env.AWS_ENDPOINT,
   accessKeyId: process.env.AWS_ACCESS,
   secretAccessKey: process.env.AWS_SECRET,
   sslEnabled: process.env.AWS_SSL,
   s3ForcePathStyle: process.env.AWS_FORCE_STYLE
}
const awsBucket = new AWS.S3(localSetup)

module.exports.uploadToMinio = async (options) => {
  try {
    const buffer = options?.req?.file?.buffer
    const mime = options?.req?.file?.mimetype
    const method = awsBucket;
    const ContentType = { ContentType: mime };

    const params = {
      Bucket: 'belajar',
      Key: options.req.file.originalname,
      Body: buffer,
      ...ContentType,
    };

    // Uploading files to the bucket
    return new Promise((resolve, reject) => {
      method.upload(params, async (errs, data) => {
        if (errs) {
          console.error('error aws', errs)
          reject(errs)
        }
        resolve(data)
        console.info(`upload success ${JSON.stringify(data)}`)
      });
    })
  } catch (error) {
   console.info(`error ${error}`)
    return error
  }
 }