

export const sighup = async(req, res) => {
    try {
        const {fullName, username, password} =req.body;
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