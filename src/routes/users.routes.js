const { Router } = require('express');
const router = Router();
require('../models/users.model');
const { 
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
    getOneUser
    } = require('../utils/users.controller');


// Get all users
router.get('/users', getAllUsers);

// Create a user
router.post('/users', createUser);

// Update a user
router.put('/users/:id', updateUser);

// Delete a user
router.delete('/users/:id', deleteUser);

// Get a user
router.get('/users/:id', getOneUser);


//get a user by email
// router.get('/users/email/:email', getOneUserByEmail);
//se coloca de esa forma para diferenciarlo del getOneUser




module.exports = router;