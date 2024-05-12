const User = require("./../db/user")

async function addUser(userModel){
    //todo
    let user = new User({
        ...userModel
    });
    await user.save();
    return user.toObject();
}

async function getUsers(){
    const users = await User.find();
    return users.map(x=>x.toObject())
}

async function getUser(id){
    const user = await User.findById(id);
    return user.toObject();
}

async function updateUser(id, userModel){
    const filter = {_id:id};
    await User.findOneAndUpdate(filter, userModel);
}

async function deleteUser(id){
    await User.findByIdAndDelete(id);

}


module.exports={addUser, getUsers, getUser, updateUser, deleteUser};