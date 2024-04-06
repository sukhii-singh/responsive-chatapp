const messageModel = require('../chat_model/chat/message')
const friendConversationModule = require('../chat_model/chat/friendsAndConversation')
const blockModel = require('../chat_model/chat/blockUsers')
const chatGrupModel = require('../chat_model/chat/chatGroup')
const usersModel = require('../chat_model/chat/users')
const fs = require('fs');

const filedelte = (file) => {
    for (i = 0; i < file.length; i++) {
        fs.unlink(file[i].path, (err) => {
            if (err) throw err
            console.log("file Delete")
        })
    }
}

exports.searchuser = async (req, res) => {
    try {
        const { search } = req.body

        console.log(req.user.id, req.body)
        const findData = await usersModel.find({
            "name": { $regex: search, $options: 'i' },
            "_id": { $nin: [req.user.id] }
        })
        console.log(findData, "finddata");
        if (findData.length) {

            return (res.status(200).send({
                status: true,
                data: findData
            }))
        }
        res.status(200).send({
            status: false,
            data: [],
            msg: "data not found"
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error, status: false })
    }
}

exports.createMessage = async (req, res) => {
    try {
        const { friendsAndConversationId, sender_id, reciever_id, textmessage, chatGroupId, chatType } = req.body
        let file = []
        req.files && req.files.forEach(ele => {
            file.push(ele.path)
        });
        if (chatType == 'personal') {
            const finddata = await friendConversationModule.findOne({ _id: friendsAndConversationId })

            if (finddata) {
                if (finddata.status == "accpect") {
                    const blockdata = await blockModel.findOne({ blocker_user: sender_id, blocked_user: reciever_id })
                    if (blockdata) {
                        req.files && filedelte(req.files)

                        return (res.status(200).send({
                            status: false,
                            msg: "msg do not send ,user is blocked"
                        }))
                    } else {
                        const blockdata = await blockModel.findOne({ blocker_user: reciever_id, blocked_user: sender_id })

                        if (blockdata) {
                            req.files && filedelte(req.files)

                            return (res.status(200).send({
                                status: false,
                                msg: "your blocked"
                            }))
                        }
                    }

                    await messageModel.create({
                        friendsAndConversationId, sender_id,
                        message: {
                            textmessage,
                            file
                        }
                    })
                    return (res.status(200).send({
                        status: true,
                        msg: "message create"
                    }))
                }
                else {
                    req.files && filedelte(req.files)
                    return (res.status(200).send({
                        status: true,
                        msg: "your request not accpect and can't send your message"
                    }))
                }
            }

            req.files && filedelte(req.files)
            return (
                res.status(200).send({
                    status: true,
                    msg: "conversationID is not found"
                }))
        }

        if (chatType == "group") {
            const finddata = await chatGrupModel.findOne({ _id: chatGroupId })
            if (finddata) {
                await messageModel.create({
                    chatGroupId, sender_id,
                    message: {
                        textmessage,
                        file
                    }
                })

                return (res.status(200).send({
                    status: true,
                    msg: " message create successfully"
                }))
            }
            res.status(200).send({
                status: false,
                msg: "GroupId is not found"
            })

        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message, status: false })
    }
}

exports.messageSeen = async (req, res) => {
    try {
        const { friendsAndConversationId } = req.body
        const seenStatus = await messageModel.updateOne({ friendsAndConversationId }, { $set: { is_seen: true } })
        res.status(200).json({
            message: `message seen `,
            status: true
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message, status: true })
    }
}

exports.fatchAllMessage = async (req, res) => {
    try {
        const { friendsAndConversationId, chatGroupId, chatType } = req.body
        if (chatType == "personal") {
            const findData = await messageModel.find({ friendsAndConversationId })
            console.log(findData)
            if (findData.length) {
                data = []
                for (let i = 0; i < findData.length; i++) {
                    const messageData = findData[i]
                    const userData = await usersModel.findOne({ _id: messageData.sender_id }).select('name profile')
                    data.push({ messageDelale: messageData, name: userData.name, profile: userData.profile })
                }
                // console.log("messageData",data)
                res.status(200).json({ message: `user message`, status: true, data: data })
            } else {
                return (res.status(200).send({
                    status: false,
                    data: data,
                    msg: "no found data"
                }))
            }

        }
        if (chatType == "group") {
            const findData = await messageModel.find({ chatGroupId })
            console.log(findData)
            if (findData.length) {
                data = []
                for (let i = 0; i < findData.length; i++) {
                    const messageData = findData[i]
                    const userData = await usersModel.findOne({ _id: messageData.sender_id }).select('name profile')
                    data.push({ messageDelale: messageData, name: userData.name, profile: userData.profile })
                }
                // console.log("messageData",data)
                res.status(200).json({ message: `user message`, status: true, data: data })
            } else {
                return (res.status(200).send({
                    status: false,
                    data: data,
                    msg: "no found data"
                }))
            }
        }

    } catch (error) {
        console.log(error)
    }
}

exports.deleteMessage = async (req, res) => {
    try {
        const { messageid, messagedeletetype, fileindex } = req.body
        const findData = await messageModel.findOne({ _id: messageid })
        // console.log(findData)
        if (findData) {
            if (messagedeletetype == 'text') {
                if (!findData?.message?.file?.length) {
                    await messageModel.deleteOne({ _id: messageid })
                    return (
                        res.status(200).json(
                            {
                                message: `message delete`,
                                status: true
                            })
                    )
                }
                findData.message.textmessage = ""
                findData.save()
                return (
                    res.status(2000).json({
                        message: 'delete message',
                        staus: true
                    })
                )
            }
            if (messagedeletetype == 'file') {
                // console.log(findData.message.textmessage)
                if (findData.message.file.length < 1 && findData.message.textmessage == "") {
                    await messageModel.deleteOne({ _id: messageid })
                    return (res.status(200).send({
                        status: true,
                        msg: "msg file was delete"
                    }))
                }
                const deltefilepath = findData.message.file[fileindex]
                findData.message.file.splice(fileindex, 1)
                deltefilepath && fs.unlink(deltefilepath, (err) => {
                    if (err) throw err

                    console.log("file delete");
                })
                console.log(findData);
                await findData.save()
                return (res.status(200).send({
                    status: true,
                    msg: "msg file was delete"
                }))

            }

        } else {
            res.status(200).json({ message: `this message id not exist` })
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message, status: false })
    }
}

exports.deleteOne = async (req, res) => {
    try {
        const { messageid, messagedeletetype, fileindex } = req.body
        const findData = await messageModel.findOne({ _id: messageid })
        // console.log(findData)
        if (findData) {
            if (messagedeletetype == 'text') {
                if (!findData?.message?.file?.length) {
                    // await messageModel.deleteOne({ _id: messageid })
                    await messageModel.updateOne({ _id: messageid }, {
                        $set: {
                            shoptDelete: true
                        }
                    })

                    return (
                        res.status(200).json(
                            {
                                message: `message delete`,
                                status: true
                            })
                    )
                }
                await messageModel.updateOne({ _id: messageid }, {
                    $set: {
                        shoptDelete: true
                    }
                })
                // findData.message.textmessage = ""
                findData.save()
                return (
                    res.status(200).json({
                        message: 'delete one message',
                        staus: true
                    })
                )
            }
            if (messagedeletetype == 'file') {
                // console.log(findData.message.textmessage)
                if (findData.message.file.length < 1 && findData.message.textmessage == "") {
                    // await messageModel.deleteOne({ _id: messageid })
                    await messageModel.updateOne({ _id: messageid }, {
                        $set: {
                            shoptDelete: true
                        }
                    })
                    return (res.status(200).send({
                        status: true,
                        msg: "msg file was delete"
                    }))
                }
                // const deltefilepath = findData.message.file[fileindex]
                // findData.message.file.splice(fileindex, 1)
                // deltefilepath && fs.unlink(deltefilepath, (err) => {
                //     if (err) throw err

                //     console.log("file delete");
                // })
                console.log(findData);
                await findData.save()
                return (res.status(200).send({
                    status: true,
                    msg: "msg file was delete"
                }))

            }

        } else {
            res.status(200).json({ message: `this message id not exist` })
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message, status: false })
    }
}

exports.searchFriendReqStatus = async (req, res) => {
    try {
        const { sender_id, reciever_id } = req.body
        const findData = await friendConversationModule.findOne({ sender_Id: sender_id, friend_id: reciever_id })
        console.log("heill", findData)
        if (findData) {
            if (findData.status == 'accpect')
                res.status(200).send({
                    status: true,
                    friend: true,
                    data: findData
                })
            if (findData.status == 'reject')
                res.status(200).send({
                    data: findData,
                    reject: true
                })
            if (findData.status == 'pending') {
                let pending = false
                if (findData.sender_Id === sender_id) {
                    pending = true
                }
                res.status(200).send({
                    data: findData,
                    pending
                })
            }


        }
        const findData1 = await friendConversationModule.findOne({ sender_Id: reciever_id, friend_id: sender_id })
        if (findData1) {
            if (findData1.status == 'accpect')
                res.status(200).send({
                    status: true,
                    friend: true,
                    data: findData1
                })
            if (findData1.status == 'reject')
                res.status(200).send({
                    data: findData1
                })
            if (findData1.status == 'pending')
                res.status(200).send({
                    data: findData1
                })

        }

    } catch (error) {
        console.log(error)
    }
} 