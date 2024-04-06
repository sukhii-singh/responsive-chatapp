const blockUserModel = require('../chat_model/chat/blockUsers')
const userModel = require('../chat_model/chat/users')

exports.createUserBlock = async (req, res) => {
    try {
        const { blocker_user, blocked_user } = req.body
        const findData = await blockUserModel.findOne({ blocker_user, blocked_user })
        // console.log(findData)
        if (findData) {
            return (res.status(200).send({
                status: true,
                msg: "this users are already blocked"
            }))
        }
        await blockUserModel.create({
            blocker_user, blocked_user
        })

        res.status(200).send({
            status: true,
            msg: "user blocked"
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message, status: false })
    }
}

exports.userUnBlock = async (req, res) => {
    try {
        const { blocker_user, blocked_user } = req.body
        const findData = await blockUserModel.findOne({
            $and: [
                { blocker_user: blocker_user }, { blocked_user: blocked_user }
            ]
        })
        console.log(findData)
        if (findData) {
            await blockUserModel.deleteOne({ _id: findData._id })

            res.status(200).json({ message: `user unblocked` })
        } else {

            res.status(200).json({ message: `this user allredy unbloked `, status: true })
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message, status: false })
    }
}

exports.getSingelBlockUser = async (req, res) => {
    try {
        const { sender_id, reciever_id } = req.body
        const findData = await blockUserModel.findOne(
            { blocker_user: sender_id }, { blocked_user: reciever_id }
        )
        if (findData) {
            return (
                res.status(200).json({
                    message: `this user blocked`,
                    data: findData,
                    status: true
                })

            )
        } else {
            const findData = await blockUserModel.findOne(
                { blocker_user:  reciever_id }, { blocked_user: sender_id }
            )
            if (findData) {

                return (
                    res.status(200).json({ message: `you are block`, data: findData, status: true })
                )
            } else {
                return (
                    res.status(200).json({
                        message: `this user not exist`,
                        status: true
                    })

                )

            }
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message, status: false })
    }
}