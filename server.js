const express = require('express')
const multer = require('multer');
const { uploadToMinio } = require('./aws');
const app = express()
const port = 1000
const upload = multer();
app.use(express.json())

app.post('/save-to-minio',upload.single('image'),async (req, res) => {
   try {
      const result = await uploadToMinio({ req })
      res.json(result)
   } catch (error) {
      res.json(error)
   }
})

app.listen(port,() => {
  console.info(`server running in port ${port}`)
})