import Users from "../model/userModel.js";
import generateToken from "../utils/generateToken.js";




export const register = async (req, res) => {
    const {
        name, email, passsword, address, phone
    } = req.body;


    const userExists = Users.findOne({ email })
    if (userExists) {
        res.status(400).json({ message: 'user already exists' });
        return;
    }

    const Createuser = Users.create({
        name, email, passsword, address, phone
    })

    if (Createuser) {
        res.status(201).json({
            _id: Createuser._id,
            name: Createuser.name,
            email: Createuser.email,
            passsword: Createuser.passsword,
            address: Createuser.address,
            phone: Createuser.phone,
            token: generateToken(Createuser._id)
        })
    } else {
        res.status(401).json({ message: "invalid User Data" });
    }
}


export const login = async (req, res) => {

    const { email, passsword } = req.body;

    const user = Users.findOne({ email });
    if (user && passsword == user.passsword) {
        res.status(200).json({
            _id: Createuser._id,
            name: Createuser.name,
            email: Createuser.email,
            passsword: Createuser.passsword,
            address: Createuser.address,
            phone: Createuser.phone,
            token: generateToken(Createuser._id)
        })
    } else {
        res.status(401).json({ message: "Invalid Email and password" })
    }
}