import express from 'express';
import { findAll, findOne, create } from '../controllers/menuController.js'

const router = express.Router();

router.get('/', findAll);
router.get('/:id', findOne);

router.post('/', create)

export default router;