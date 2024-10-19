const router = require("express").Router();
const { User, validate } = require("../models/TodoUser");
const bcrypt = require("bcryptjs");

router.post("/", async(req, res) => {
    try{
        const{error} = validate(req.body);
        if (error)
            return res.status(400).send({ message: error.details[0].message });

        const User = await User.findOne({ email:req.body.email });
        if (User)
            return res.status(409).send({message:"User telah memberikan email sebelumnya!"});

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword =  await bcrypt.hash(req.body.password.salt);

        await new User({...req.body, password:hashPassword}).save();
        res.status(201).send({message: "Membuat user success"})

    } catch (error) {
        res.status(500).send({message:"Internal Server Error"})
    }
});

module.exports = router;