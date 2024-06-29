import multer from 'multer';
import nextConnect from 'next-connect';

const upload = multer({
  storage: multer.diskStorage({
    destination: './public/images',
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
  }),
});

const handler = nextConnect();

handler.use(upload.single('image'));

handler.post((req, res) => {
  res.status(200).json({ message: 'Image uploaded successfully', filename: req.file.filename });
});

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
