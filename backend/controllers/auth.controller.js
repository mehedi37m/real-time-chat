

export const signup = async(req, res) => {
    try {
        const {fullName, username, password,confirmPassword, gender} =req.body;
        res.send("login routes");
    } catch (error) {
        
    }
}
export const login = (req, res) => {
    res.send("login routes");
}
export const logout = (req, res) => {
    res.send("login routes");
}