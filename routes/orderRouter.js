import express from 'express';
import { findAll, findOne, create, update, remove } from '../controllers/orderController.js';

const router = express.Router();

router.get('/', findAll);
router.get('/:id', findOne);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);

export default router;