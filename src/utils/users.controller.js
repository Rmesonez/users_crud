const Users = require('../models/users.model');

const getAllUsers = async (req, res) => {
    try {
        const getUsers = await Users.findAll({
            attributes: ['firstname', 'lastname', 'email']
        });
        // {
            //attributes: {
            //     exclude: ['password']
            // }
        // }
        // console.log(getusers)
        // res.send('get all users');
        res.json(getUsers);
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong cannot get users',
        });
    }
};

const createUser= async (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    //newUser = req.body;
    try {
        const newUser = await Users.create({ firstname, lastname, email, password });
        //await Users.create(newUser);
        res.json(newUser);//status(201)
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong cannot create a user',
        });
    }
};

const updateUser = async (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    try {
        const updateUser = await Users.update(
            { firstname, lastname },
            { where: { id: req.params.id }
        });
        // updateUser.set({ firstname, lastname });
        // await updateUser.save();
        res.json(updateUser);
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong cannot update a user',
        });
    }
};

const deleteUser= async (req, res) => {
    // console.log(req.params.id)
    try {
        await Users.destroy({ where: { id: req.params.id } });
        res.status(204)
        res.send({
            message: 'User deleted successfully',
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong cannot delete a user',
        });
    }
};

const getOneUser = async (req, res) => {
    try{
        const getUser = await Users.findOne({ where: { id: req.params.id } });
        res.json(getUser);
    }   catch (error) {
        return res.status(500).json({
            message: 'Something went wrong cannot get a user',
        });
    }
};

//find one user by email
const getOneUserByEmail = async (req, res) => {
    try{
        const getUser = await Users.findOne({ where: { email: req.params.email } });
        res.json(getUser);
    }   catch (error) {
        return res.status(500).json({
            message: 'Something went wrong cannot get a user',
        });
    }
};



module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
    getOneUser
};