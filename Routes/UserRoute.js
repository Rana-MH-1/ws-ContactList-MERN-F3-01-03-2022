const express = require('express')
const router = express.Router()
//import the model
const User = require('../Models/UserSchema')

// create an API for adding a user in the DB
// DB : test
//Model : user
//Collection : users
//@method: POST
router.post('/', async(req,res)=>{
    try {
        //1
    /* const newUser = new User(req.body)
    await newUser.save() */
    //2 create()
    const newUser = await User.create(req.body)
    res.json(newUser)
    } catch (error) {
        console.log(error)
        
    }
})

// create an API for getting all users from the DB
// DB : test
//Model : user
//Collection : users
//!@method: GET
router.get('/', async(req,res)=>{
    try {
        const users = await User.find({})
        res.json(users)
    } catch (error) {
        console.log(error);
    }
})

// create an API for delete a user(doc) from the DB
// DB : test
//Model : user
//Collection : users
//!@method: DELETE
router.delete('/:id',async(req,res)=>{
    try {
        
        const deletedUser = await User.findByIdAndDelete(req.params.id)
        res.json({msg:'User has been deleted successfully!',deletedUser})
    } catch (error) {
        console.log(error)
    }
})

// create an API for updating a user(doc) from the DB
// DB : test
//Model : user
//Collection : users
//!@method: PUT
router.put('/:id', async(req,res)=>{
    try {
        //1 find() //2 Edit() // 3 save()
        //findByIdAndUpdte 
        const updatedUSer = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json(updatedUSer)

    } catch (error) {
        console.log(error);
    }
})

module.exports = router