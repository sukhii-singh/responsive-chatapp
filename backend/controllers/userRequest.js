const usersModel = require('../chat_model/chat/users')
const friendsAndConversationModel = require('../chat_model/chat/friendsAndConversation')

exports.sendFrindRequest = async (req, res) => {
    try {
        const { sender_Id, friend_id } = req.body
        const findData = await usersModel.findOne({}, { sender_Id, friend_id })
        if (findData) {
            await friendsAndConversationModel.create({
                sender_Id, friend_id
            })
            res.status(200).json({ message: `send request sucessfuly`, status: true })
        } else {
            res.status(200).json({ message: `this user id not exist` })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.error })
    }
}


exports.AcceptedFrindRequest = async (req, res) => {
    try {
        const { sender_Id, friend_id } = req.body
        const findData = await usersModel.findOne({}, { sender_Id, friend_id })
        if (findData) {
            await friendsAndConversationModel.updateOne({
                sender_Id, friend_id
            }, { $set: { status: "accpect" } })
            res.status(200).json({ message: `friend request accpected `, status: true })
        } else {
            res.status(200).json({ message: `this user id all ready friend` })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.error })
    }
}

exports.RejectFrindRequest = async (req, res) => {
    try {
        const { sender_Id, friend_id } = req.body
        const findData = await usersModel.findOne({}, { sender_Id, friend_id })
        if (findData) {
            await friendsAndConversationModel.updateOne({
                sender_Id, friend_id
            }, { $set: { status: "reject" } })
            res.status(200).json({ message: `friend request Reject `, status: true })
        } else {
            res.status(200).json({ message: `this user id all ready friend` })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.error })
    }
}

exports.fetchAllFriendList = async (req, res) => {
    try {
        const { userId } = req.body
        const findData = await friendsAndConversationModel.find({
            $or: [
                { sender_Id: userId },
                { friend_id: userId }
            ]
        }).populate('sender_Id').populate('friend_id')

        const usersList = findData.map((it) => {
            // console.log("it id",it._id,"sender =>", it.sender_Id._id)
            if (it.sender_Id._id == userId) {
                return { friendsAndConversationId: it._id, friend: it.sender_Id }
            }
            if (it.friend_id._id == userId) {
                return { friendsAndConversationId: it._id, friend: it.friend_id }
            }
        })
        if (usersList) {
            res.status(200).json({ data: usersList, status: true })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}