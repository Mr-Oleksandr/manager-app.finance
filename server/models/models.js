const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
});

const Accounts = sequelize.define('accounts', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    balance: {type: DataTypes.INTEGER}
});

const PaymentsIncome = sequelize.define('income', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    price: {type: DataTypes.INTEGER},
});

const PaymentsSpending = sequelize.define('spending', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    price: {type: DataTypes.INTEGER},
});

const Category = sequelize.define('category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true},
});

const Client = sequelize.define('client', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
});


const Transfer = sequelize.define('transfer', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    price: {type: DataTypes.INTEGER},
});

const Payments = sequelize.define('payments', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    incomeId:{type: DataTypes.INTEGER},
    spendingId:{type: DataTypes.INTEGER},
    accountId:{type: DataTypes.INTEGER},
    price: {type: DataTypes.INTEGER},
    actualBalance:{type:DataTypes.INTEGER},
    categoryId:{type:DataTypes.INTEGER},
    clientId:{type:DataTypes.INTEGER}
});


Category.hasMany(PaymentsIncome);
PaymentsIncome.belongsTo(Category);

Category.hasMany(PaymentsSpending);
PaymentsSpending.belongsTo(Category);

Client.hasMany(PaymentsIncome);
PaymentsIncome.belongsTo(Client);

Client.hasMany(PaymentsSpending);
PaymentsSpending.belongsTo(Client);

Accounts.hasMany(PaymentsIncome);
PaymentsIncome.belongsTo(Accounts);

Accounts.hasMany(PaymentsSpending);
PaymentsSpending.belongsTo(Accounts);


module.exports = {
    User,
    Accounts,
    PaymentsIncome,
    PaymentsSpending,
    Category,
    Client,
    Payments,
};