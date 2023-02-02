const Router = require('express');
const router = new Router();
const paymentsSpendingController = require('../controllers/paymentsSpendingController')

router.post('/', paymentsSpendingController.create);
router.get('/',paymentsSpendingController.getAll);
router.get('/:id', paymentsSpendingController.getOne);
router.delete('/:id', paymentsSpendingController.delete);


module.exports = router;