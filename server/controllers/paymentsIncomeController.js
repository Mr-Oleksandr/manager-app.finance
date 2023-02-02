const {PaymentsIncome} = require('../models/models');
const ApiError = require('../error/ApiError');
const {Payments} = require('../models/models');
const {Category} = require('../models/models');
const {Client} = require('../models/models');
const {Accounts} = require('../models/models');
class PaymentsIncomeController {
    async create(req, res, next) {
     const {accountId, price, categoryId, clientId} = req.body;
     try{
         const accounts =  await Accounts.findOne({where: {id:accountId}});
         if(!accounts){
             return res.json('Не вибраний рахунок для списання коштів')
         }
         await Accounts.update({balance: accounts.balance + price}, {where: {id:accountId}});
         const paymentsIncome = await PaymentsIncome.create({accountId, price, categoryId, clientId});
         const category = await Category.findOne({where:{id:categoryId}});
         const client = await Client.findOne({where:{id:clientId}});
         await Payments.create({incomeId:paymentsIncome.id, actualBalance:accounts.balance + price, price:price, categoryId:category.id, clientId:client.id, accountId:accounts.id});
         return res.json(paymentsIncome)
     }catch (e) {
         next(ApiError.badRequest(e.message))
     }
    }

    async getAll(req, res) {
        const paymentsIncome = await PaymentsIncome.findAll({
            include: [{
                model: Category,
                attributes: ['name']
            }, {
                model: Client,
                attributes: ['name']
            }]});
        return res.json(paymentsIncome)
    }

    async getOne(req, res) {
        const {id} = req.params;
        const paymentIncome = await PaymentsIncome.findOne({
            where: {id},
            include:
                [{
                    model: Category,
                    attributes: ['name']
                },
                    {model: Client, attributes: ['name']}]
        });
        return res.json(paymentIncome)
    }


    async delete(req, res) {

    }
}


module.exports = new PaymentsIncomeController();