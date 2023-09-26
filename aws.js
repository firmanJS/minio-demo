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
      Bucket: 'example',
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

module.exports.updateInMinio = async (options) => {
  try {
    const buffer = options?.req?.file?.buffer
    const mime = options?.req?.file?.mimetype
    const method = awsBucket;
    const ContentType = { ContentType: mime };

    const params = {
      Bucket: 'example',
      Key: options.req.file.originalname,
      Body: buffer,
      ...ContentType,
    };
    if (row?.column) {
      const url = row?.column ?? '';
      const splitter = '//'
      const indexOf = url.indexOf(splitter);
      const slicing = url.slice(indexOf + splitter.length)
      const split = slicing.split('.com/')[1]
      const pathOnly = split.substring(0, split.lastIndexOf('/'))

      const paramsDelete = {
        Bucket: `${bucket}/${pathOnly}`,
        Key: path.basename(url)
      };

      // Uploading files to the bucket
      const bucketPath = new Promise((resolve) => {
        method.putObject(paramsDelete, (errs) => {
          if (errs) {
            console.error('error aws delete', errs)
            logger(filePath, 'upload').write(`Error uploading file ${fileName} to bucket ${pathForDatabase} ${logDateFormat()}\n`)
          }
          method.upload(params, (errsPut, dataPut) => {
            if (errsPut) {
              console.error('error aws put', errsPut)
              logger(filePath, 'upload').write(`Error uploading file ${fileName} to bucket ${pathForDatabase} ${logDateFormat()}\n`)
            }
            resolve(dataPut?.Location)
            // removing temporary watermarked image
            if (additional.isWatermark) {
              fs.unlink(watermarkImage, (err) => {
                if (err) {
                  console.error(err)
                }
              })
            }

            logger(filePath, 'upload').write(`Sucess uploading file ${fileName} to bucket ${pathForDatabase} ${logDateFormat()}\n`)
          });
          logger(filePath, 'upload').write(`Sucess uploading file ${fileName} to bucket ${pathForDatabase} ${logDateFormat()}\n`)
        });
      })
      row.payload[row?.payloadName] = await bucketPath
    } else {
      // Uploading files to the bucket
      const bucketPath = new Promise((resolve) => {
        method.upload(params, (errsPut, dataPut) => {
          if (errsPut) {
            console.error('error aws put', errsPut)
            logger(filePath, 'upload').write(`Error uploading file ${fileName} to bucket ${pathForDatabase} ${logDateFormat()}\n`)
          }
          resolve(dataPut?.Location)

          // removing temporary watermarked image
          if (additional.isWatermark) {
            fs.unlink(watermarkImage, (err) => {
              if (err) {
                console.error(err)
              }
            })
          }

          logger(filePath, 'upload').write(`Sucess uploading file ${fileName} to bucket ${pathForDatabase} ${logDateFormat()}\n`)
        });
      })
      row.payload[row?.payloadName] = await bucketPath
    }

    return false
  } catch (error) {
    console.error('Error Upload Put: ', error)
    return row?.payload
  }
}

module.exports.deleteFromMinio = async (options) => {
  try {
      const paramsDelete = {
        Bucket: `example`,
        Key: options?.req?.query?.key
      };
      const method = awsBucket;

      // Uploading files to the bucket
      const bucketPath = new Promise((resolve, reject) => {
        method.deleteObject(paramsDelete, (errs,data) => {
          if (errs) {
            console.error('error aws delete', errs)
            reject(errs)
          }
          
          resolve(data)
        });
      })
    return bucketPath
  } catch (error) {
    console.error('Error Upload Put: ', error)
    return row?.payload
  }
}