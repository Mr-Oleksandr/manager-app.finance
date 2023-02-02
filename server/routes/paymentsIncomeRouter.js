const Router = require('express');
const router = new Router();
const paymentsIncomeController = require('../controllers/paymentsIncomeController');

router.post('/', paymentsIncomeController.create);
router.get('/',paymentsIncomeController.getAll);
router.get('/:id', paymentsIncomeController.getOne);
router.delete('/:id', paymentsIncomeController.delete);

module.exports = router;