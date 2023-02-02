const {Accounts} = require('../models/models');
const sequelize = require('sequelize')
class AccountsController {
    async create(req, res){
        const {name, balance} = req.body;
        const accounts = await Accounts.create({name, balance});
        return res.json(accounts)
    }

    async getAll(req, res){
        const accounts = await Accounts.findAll()
        return res.json(accounts)
    }

    async getById(req, res){

    }
    async delete(req, res){

    }
}

module.exports = new AccountsController();