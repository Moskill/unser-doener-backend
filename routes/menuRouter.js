import express from 'express';
import { findAll, findOne, create, update, remove } from '../controllers/menuController.js';
import range from '../middlewares/range.js';

const router = express.Router();

router.get('/', range, findAll);
router.get('/:id', findOne);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);

export default router;