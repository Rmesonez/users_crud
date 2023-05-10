const express = require('express');
const db = require('./utils/database');
const usersRoutes = require('./routes/users.routes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;


//middlewares
app.use(express.json());
app.use(usersRoutes);

//autenticar con sequelize
async function testConnection() {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}...`);
        });
        //sincronizar con sequelize
        await db.sync({ force: false});
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
testConnection();

//console.log(process.env);