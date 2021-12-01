import express from 'express';
import { create, findAll, findOne } from '../controllers/userController.js';

const router = express.Router();

router.get('/', findAll);
router.get('/:id', findOne);
router.post('/', create);
// router.put('/:id', update);
// router.delete('/:mid-:sdid', remove);


export default router;