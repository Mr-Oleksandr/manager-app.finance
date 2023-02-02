const Router = require('express');
const router = new Router();
const accountsRouter = require('./accountsRouter');
const categoryRouter = require('./categoryRouter');
const clientRouter = require('./clientRouter');
const paymentsIncomeRouter = require('./paymentsIncomeRouter');
const paymentsSpendingRouter = require('./paymentsSpendingRouter');
const userRouter = require('./userRouter');
const paymentsRouter = require('./paymentsRouter');

router.use('/user', userRouter);
router.use('/category',categoryRouter);
router.use('/accounts', accountsRouter);
router.use('/income', paymentsIncomeRouter);
router.use('/spending',paymentsSpendingRouter);
router.use('/client',clientRouter);
router.use('/payments',paymentsRouter);
module.exports = router;