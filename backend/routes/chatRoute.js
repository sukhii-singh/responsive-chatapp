const express = require('express')
const router = express.Router()
const uplode = require('../middleware/fileuplode')
const { sendFrindRequest, AcceptedFrindRequest, RejectFrindRequest, fetchAllFriendList } = require('../controllers/userRequest')
const { createUserBlock, userUnBlock, getSingelBlockUser } = require('../controllers/blockUserController')
const { createMessage, messageSeen, fatchAllMessage, deleteMessage, deleteOne, searchuser, searchFriendReqStatus } = require('../controllers/messageController')
const { createGroupAndMember, addNewMembersAndAdminInGroup, removeGroupMembersAdnAdmin } = require('../controllers/chatGroup')
const { creatMessageReply } = require('../controllers/messageReply')
const { userAuth } = require('../middleware/auth')

router.post('/search-friend', userAuth, searchuser)
router.post('/fetch-friend', searchFriendReqStatus)



//    ------  User Request API ------------//

router.post('/send-friend-request', sendFrindRequest)
router.post('/accpect-friend-request', AcceptedFrindRequest)
router.post('/reject-friend-request', RejectFrindRequest)
router.post('/fatch-friend-list', fetchAllFriendList)

// ----------- User Block Status API --------- //

router.post('/user-block', createUserBlock)
router.post('/user-unblock', userUnBlock)
router.post('/get-block-user', getSingelBlockUser)

// ----------- user chat API ---------   //

router.post('/send-msg', uplode.array("file", 12), createMessage)
router.post('/seen-msg', messageSeen)
router.post('/get-all-msg', fatchAllMessage)
router.post('/delete-msg', deleteMessage)
router.post('/delete-one-msg', deleteOne)




// ---------- Group Chat API -------  //

router.post('/create-group-and-members', uplode.single('img'), createGroupAndMember)
router.post('/add-new-group-members', addNewMembersAndAdminInGroup)
router.post('/remove-group-members', removeGroupMembersAdnAdmin)


// ---------- Replay Meassage -------------//
router.post('/reply-message', creatMessageReply)

module.exports = router