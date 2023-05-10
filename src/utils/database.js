const { Sequelize } = require('sequelize');
require('dotenv').config();

//conexion a la base de datos existente
// const db = new Sequelize({
//     host: 'localhost',
//     database: 'users_crud',
//     port: 5432,
//     username: 'postgres',
//     password: 'root',
//     dialect: 'postgres',
// });


//conexion a db en render
const db = new Sequelize({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

//external db
//postgres://rmesonez:qsjbrTHfSsMPF7beuDKfkrym6QItJPOR@
//host
//dpg-chdf7h3hp8u3v707inh0-a.oregon-postgres.render.com/users_crud_ay7z

module.exports = db;
