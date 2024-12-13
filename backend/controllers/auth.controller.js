import User from "../models/user.model";


export const signup = async(req, res) => {
    try {
        const {fullName, username, password,confirmPassword, gender} =req.body;
        // res.send("login routes");
        if(password!== confirmPassword){
            return res.status(400).json({error:"Invalid password"})
        }
        const user = await User.findOne({username});

        if(user){
            return res.status(400).json({error:"Username already in exists"})
        }

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;


        const newUser = new User({
            fullName,
            username,
            password,
            gender,
            profilePic: gender === 'male' ? boyProfilePic :girlProfilePic
        })
        await newUser.save();

        res.status(201).json({
            _id:newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePic:newUser.profilePic
        })
    } catch (error) {
        console.log("error in signup controller", error.message);
         res.status(500).json({error:"Internal server Error"})
    }
}
export const login = (req, res) => {
    res.send("login routes");
}
export const logout = (req, res) => {
    res.send("login routes");
}