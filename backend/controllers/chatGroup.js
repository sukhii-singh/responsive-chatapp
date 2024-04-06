const chatGroupModel = require('../chat_model/chat/chatGroup')



const filedelte = (file) => {
    for (i = 0; i < file.length; i++) {
        fs.unlink(file[i].path, (err) => {
            if (err) throw err
            console.log("file Delete")
        })
    }
}

exports.createGroupAndMember = async (req, res) => {
    try {
        const { groupName, createdBy, members, group_admins } = req.body
        console.log(req.body)
        const img = req.file ? req.file.path : ""
        const createGroup = await chatGroupModel.create({
            groupName, createdBy, group_admins,
            members, groupImage: img
        })
        console.log(createGroup)
        if (createGroup) {
            createGroup.save()
            return (
                res.status(201).json({
                    message: `create new group and new members,admin`,
                    data: createGroup,
                    status: true
                })
            )
        }

    } catch (error) {
        console.log(error)
        req.files && filedelte(req.files)
        res.status(500).json({ message: error.message, status: false })
    }
}

exports.addNewMembersAndAdminInGroup = async (req, res) => {
    try {

        const { groupId, members, group_admins } = req.body
        const findData = await chatGroupModel.findOne({ _id: groupId })
        console.log(findData)


        if (findData) {
            if (members) {
                const memebersId = [...findData.members, ...members]
                const allMembers = [...memebersId]
                const data = await chatGroupModel.updateOne({ _id: groupId }, { $set: { members: allMembers } })
                return (
                    res.status(200).json({ message: `add new members`, status: true, data: data })
                )
            } else {
                const adminID = [...findData.group_admins, ...group_admins]
                const allAdmin = [...adminID]
                console.log(adminID)
                const data = await chatGroupModel.updateOne({ _id: groupId }, { $set: { group_admins: allAdmin } })
                return (
                    res.status(200).json({ message: `add new admin`, status: true, data: data })
                )

            }

        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}

exports.removeGroupMembersAdnAdmin = async (req, res) => {       
    try {
        const { groupId, members, group_admins } = req.body
        const findData = await chatGroupModel.findOne({ _id: groupId })
        if (findData) {
            if(members){
                // console.log("members")
                const filtermember = findData.members.filter((it) => {
                    if (!members.includes(it)) {
                        return it
                    }
                })
    
                findData.members = filtermember
                findData.save()
    
                return (
                    res.status(200).json({ message: `remove group member`, status: true })
                )
            }else{
               
                const adminFilterData = findData.group_admins.filter((it)=> {
                    console.log(it)
                    if(!group_admins.includes(it)){
                        return it
                    }
                })
                findData.group_admins = adminFilterData
                findData.save()
                return (
                    res.status(200).json({ message: `remove group admin`, status: true })
                )
            }
            
        }
        res.status(200).send({
            status: false,
            msg: "this groupid not exits"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}