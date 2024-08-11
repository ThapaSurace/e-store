import User from "../model/user.model.js"

//get all users
export const getAllUsers = async (req,res) => {
    // if(!req.isAdmin) return res.status(403).
    // send("Only admin can access thsi route")
    try {
        const users = await User.find()
        if(!users) return res.status(400).send("Nothing")
        res.status(200).send(users)    
    } catch (error) {
        res.status(500).send(err)
    }
}

//get single user
export const getSingleUser = async (req,res) => {
    
    try {
       const user = await User.findById(req.params.id) 
       if(!user) return res.status(400).send("User not found")

        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(err)
    }
}

//delete user
export const deleteUser = async (req,res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status("User deleted successfully!")
    } catch (error) {
        res.status(500).send(err)
    }
}