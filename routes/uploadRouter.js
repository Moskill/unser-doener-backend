import express from 'express';
import multer from 'multer';
import { getImage, uploadImage } from '../controllers/uploadController.js'

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/upload');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
});

const upload = multer({storage});

router.get('/:file', getImage);
router.post('/', upload.single('imageUpload'), uploadImage);

export default router;