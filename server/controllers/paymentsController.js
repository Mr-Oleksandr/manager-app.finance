const {PaymentsIncome} = require('../models/models');
const {PaymentsSpending} = require('../models/models');
const {Payments} = require('../models/models')
class PaymentsController {

    async getAll(req, res) {
        let {categoryId, clientId, limit, page} = req.query;
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;
        let payments;
        if(!categoryId && !clientId){
            payments = await Payments.findAndCountAll({limit, offset})
        }
        if(categoryId && !clientId){
            payments = await Payments.findAndCountAll({where:{categoryId}, limit, offset})
        }
        if(!categoryId && clientId){
            payments = await Payments.findAndCountAll({where:{clientId}, limit, offset})
        }
        if(categoryId && clientId){
            payments = await Payments.findAndCountAll({where:{categoryId, clientId}, limit, offset})
        }
        return res.json(payments)
    }

}


module.exports = new PaymentsController();