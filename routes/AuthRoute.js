const router = require("express").Router();
const User  = require("../models/TodoUser");
const joi = require("joi");
const bcrypt = require("bcryptjs");

router.post("/", async (req, res) => {
    try {
        const {error} = validate(req.body);
        if (error)
            return res.status(400).send({ message: error.details[0].message});

        const User = await User.findOne({ email: req.body.email});
        if(!User)
            return res.status(401).send({ message:"Invalid Email atau Passsword"});

        const validPassword = await bcrypt.compare(
            req.body.password, User.password
        );
        if(!validPassword)
            return res.status(401).send({message:"inavalid Email atau Password "});
        const token = User.generateAuthToken();
        res.status(200).send({data:token, message:"login success!"});

    } catch (error) {
        res.status(500).send({message:"Internal Server Error"});
    }
});

const  validate = (data) => {
    const schema = joi.object({
        email:joi.string.email().required().label("Email"),
        password:joi.string().required().label("Password")
    });
    return schema.validate(data);
}

module.exports = router;