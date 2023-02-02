const Router = require('express');
const router = new Router();
const accountsController = require('../controllers/accountsController');


router.post('/', accountsController.create);
router.get('/', accountsController.getAll);
router.get('/:id', accountsController.getById);
router.delete('/:id', accountsController.delete);


module.exports = router;