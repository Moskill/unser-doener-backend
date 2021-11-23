import express from 'express';
import { findAll, findOne } from '../controllers/sideDishesController.js'

const router = express.Router();


router.get('/', findAll);
router.get('/:id', findOne);

export default router;