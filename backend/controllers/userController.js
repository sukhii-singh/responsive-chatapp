const userModel = require('../chat_model/chat/users')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const validation = (body) => {
    let arr = [];
    for (const key in body) {
        if (!body[key]) {
            arr.push(key);
        }
    }
    return arr;
};


exports.userSingup = async (req, res) => {
    console.log(req)
    try {
        const { name, email, password } = req.body
        const img = req.file ? req.file.path : ""
        const haspassword = await bcrypt.hash(password, 10)
        const exist = await userModel.findOne({ email: email })

        if (exist) return res.status(409).json({ message: `Email already in use`, status: false })
        const data = await userModel.create({
            name, email, password: haspassword, profile: img
        })
        if (data) {
            let token = jwt.sign({ id: data._id }, process.env.JWT_SECRET_KEY, {
                expiresIn: "1h"
            })
            data.save()
            let result = data.toObject();
            delete result.password;
            res.status(201).json({ message: `create user success`, data: result, status: "success", token })
        }
    } catch (error) {
        res.status(500).json({ message: error.error })
    }
}


exports.userLogin = async (req, res) => {
    const { password, email } = req.body
    let errors = validation(req.body);

    if (!password || !email) {
        res.status(409).json({ "message": `Please enter ${errors}` })

    }
    try {
        const data = await userModel.findOne({ email })
        if (data) {
            const comperPassword = await bcrypt.compare(password.toString(), data.password)
            if (comperPassword == true) {
                let token = jwt.sign({ id: data._id }, process.env.JWT_SECRET_KEY, {
                    expiresIn: "1h"
                })
                let result = data.toObject()
                delete result.password
                res.cookie('jwt_token', token, { httpOnly: true });
                res.send({ message: `user login success`, token, data: result, status: "success" })
            } else {
                res.status(406).json({ "message": "Invalid credentials" })
            }
        } else {
            res.status(406).json({ 'message': 'Invalid credentials' })
        }
    } catch (error) {
        console.log(error, "err")
        res.status(500).json({ message: error.error })
    }

}