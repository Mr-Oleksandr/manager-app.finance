const {PaymentsSpending} = require('../models/models');
const {Payments} = require('../models/models');
const {Category} = require('../models/models');
const {Client} = require('../models/models');
const {Accounts} = require('../models/models');

class PaymentsSpendingController {
    async create(req, res) {
        const {accountId, price, categoryId, clientId} = req.body;
        const accounts =  await Accounts.findOne({where: {id:accountId}});
        if(!accounts){
            return res.json('Не вибраний рахунок для списання коштів')
        }
        await Accounts.update({balance: accounts.balance - price}, {where: {id:accountId}});
        const spending = await PaymentsSpending.create({accountId, price, categoryId, clientId});
        const category = await Category.findOne({where:{id:categoryId}});
        const client = await Client.findOne({where:{id:clientId}});
        await Payments.create({spendingId:spending.id, actualBalance:accounts.balance - price, price:price, categoryId:category.id, clientId:client.id, accountId:accounts.id});
        return res.json(spending)
    }

    async getAll(req, res) {
        const spending = await PaymentsSpending.findAll({
            include: [{
                model: Category,
                attributes: ['name']
            }, {
                model: Client,
                attributes: ['name']
            }]});
        return res.json(spending)
    }

    async getOne(req, res) {
        const {id} = req.params;
        const spending = await PaymentsSpending.findOne({
            where: {id},
            include:
                [{
                    model: Category,
                    attributes: ['name']
                },
                    {model: Client, attributes: ['name']},
                    {model:Accounts, attributes: ['name']}]
        });
        return res.json(spending)
    }


    async delete(req, res) {

    }
}


module.exports = new PaymentsSpendingController();