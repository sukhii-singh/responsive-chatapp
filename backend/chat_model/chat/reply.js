const mongoose=require('mongoose')

const schema=new mongoose.Schema({
    message_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"messages",
        required:true
    },
    replyer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
    },
    friendsAndConversationId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"friendsAndConversation",
    },
    message:{
        textmessage:{
            type:String
        },file:{
            type:Array
        },file_key:{
            type:Array
        }
    },
    chatGroupId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"chatgroup",
    },
},{timestamps:true})
const replymodel=new mongoose.model("reply",schema)
module.exports=replymodel