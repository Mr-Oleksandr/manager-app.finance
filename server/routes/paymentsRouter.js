const Router = require('express');
const router = new Router();
const paymentsController = require('../controllers/paymentsController');


router.get('/', paymentsController.getAll);



module.exports = router;