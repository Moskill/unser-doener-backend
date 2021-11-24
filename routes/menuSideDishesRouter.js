import express from 'express';
import { findAll, create, remove } from '../controllers/menuSideDishesController.js'

const router = express.Router();

router.get('/', findAll);
// router.get('/:id', findOne);
router.post('/', create);
// router.put('/:id', update);
router.delete('/:mid-:sdid', remove);


export default router;