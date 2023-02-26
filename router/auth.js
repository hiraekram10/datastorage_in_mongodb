const express = require('express')
const router = express.Router()

require('../db/conn')
const User = require('../model/userSchema')

//
router.get('/', (req, res) => {
    res.send('hello from server Home')
})

//post req for get data using promises
// router.post('/register',  (req, res) => {


//     //object destructuring
//     const { name, email, phone, password, cpassword } = req.body

//     if (!name || !email || !phone || !password || !cpassword) {
//         return res.status(422).json({ error: 'failed to proceed' })
//     }
//     User.findOne({ email: email })
//         .then((userExist) => {
//             if (userExist) {
//                 return res.status(422).json({ error: 'Email already exist' })
//             }
//             //createnewuser
//             const user = new User({ name, email, phone, password, cpassword })

//             user.save().then(() => {
//                 res.status(201).json({ message: 'user registered successfully' });
//             }).catch((error) => {
//                 res.status(500).json({ error: 'failed to register' })
//             })
//         }).catch((err) => {
//             console.log(err.message)
//         })

// });

//async await 
router.post('/register', async (req, res) => {

    //object destructuring
    //data get
    const { name, email, phone, password, cpassword } = req.body

    //validation check
    if (!name || !email || !phone || !password || !cpassword) {
        return res.status(422).json({ error: 'failed to proceed please fill all requirements' })
    }

    try {
        const userExist = await User.findOne({ email: email })
//user exist
        if (userExist) {
            return res.status(422).json({ error: 'Email already exist' })
        }
//new user
        const user = new User({ name, email, phone, password, cpassword })

        const userRegister = await user.save()
        res.status(201).json({ message: 'user registered successfully' });




    } catch (err) {
        console.log(err.message)
    }


});





module.exports = router;