import multer from 'multer';
import express from 'express';
import path from 'path';
import fs  from 'fs';

const __DIR__ = path.resolve();
const app = express();


// Die Route um Bilder zu laden
export const getImage = (req, res) =>{
  fs.readFile(`./public/upload/${req.params.file}`,  (err, data) => {
    res.send(data)
  });
};

// const upload = multer({storage});

// Die Upload Route - führt direkt in den Zielordner -> (./upload)
export const uploadImage = (req, res, err) => {
    res.json({ url: `http://localhost:8080/uploads/${req.file.originalname}` })
    // fs.readFile(req.body.menu.rawFile.path, (err, content) => {
    //   console.log('Hier bin ich in uploadImage')
    //     res.writeHead(200, {'Content-Type': 'image/*'});
    //     res.end(content)
    // })

};

