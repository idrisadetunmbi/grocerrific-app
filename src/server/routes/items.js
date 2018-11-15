import { Router } from 'express';

import { items as controller } from '../controllers';

const router = Router();

router.get('/', controller.get);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

export default router;
