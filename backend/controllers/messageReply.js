const messagesmodel = require("../chat_model/chat/message")
const replyModel = require("../chat_model/chat/reply")

exports.creatMessageReply = async (req, res) => {
    try {
        const { message_id, sender_id, reciever_id, friendsAndConversationId, replyMessageType, chatGroupId, textmessage } = req.body
        const findMessageData = await messagesmodel.findOne({ _id: message_id })
        let file = []
        req.files && req.files.forEach(ele => {
            file.push(ele.path)
        });
        // console.log(req.body)
        if (findMessageData) {
            if (replyMessageType == "text") {
                const findSeenMessageStatus = await messagesmodel.findOne({_id:message_id},{sender_id:0,shoptDelete:0, message:0,friendsAndConversationId:0})
                console.log(findSeenMessageStatus.is_seen)
                if(findSeenMessageStatus.is_seen == "false"){
                    return(
                        res.status(200).json({message:`user message not seen`, status:false})

                    )
                }else{
                       const createdata = await messagesmodel.create({
                    message_id, message:{textmessage,file}, reciever_id,friendsAndConversationId, chatGroupId, sender_id
                })
                // console.log("createdata=> ",createdata)
                createdata.save()
                return (
                    res.status(200).json({message:`user message reply`,status:true})
                )
                }
             
            }
            if (replyMessageType == "file") {

            }
        } else {
            res.status(200).json({ message: `this user id not exist`, status: false })
        }


    } catch (error) {
        console.log(error)
    }
}