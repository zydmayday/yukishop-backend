const multer = require('multer')
const path = require('path')

//MULTER CONFIG: to get file photos to temp server storage
const multerConfig = {
    
  storage: multer.diskStorage({
    //Setup where the user's file will go
    destination: function(req, file, next){
      next(null, path.join(__dirname, '../static/public/'))
    },   
      
    //Then give the file a unique name
    filename: function(req, file, next){
      const ext = file.mimetype.split('/')[1]
      next(null, file.originalname.split('.')[0] + '-' + Date.now() + '.'+ ext)
    }
  })
}

module.exports = multerConfig