const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Users = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    firstname: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING(15),
        allowNull: false,
    }
},{
    timestamps: false
});

module.exports = Users;
