import Users from "../model/userModel.js";
import generateToken from "../utils/generateToken.js";




// export const register = async (req, res) => {
//     try {
//         const {
//             name, email, password, address, phone
//         } = req.body;

//         if (!name || !email || !password || !address || !phone) {
//             res.status(401).json({ message: "All Filds Are Required" });
//         }
//         const userExists = Users.findOne({ email })
//         if (userExists) {
//             res.status(400).json({ message: 'user already exists' });
//             return;
//         }

//         const Createuser = Users.create({
//             name, email, password, address, phone
//         })

//         if (Createuser) {
//             res.status(201).json({
//                 _id: Createuser._id,
//                 name: Createuser.name,
//                 email: Createuser.email,
//                 password: Createuser.password,
//                 address: Createuser.address,
//                 phone: Createuser.phone,
//                 token: generateToken(Createuser._id)
//             })
//         } else {
//             res.status(401).json({ message: "invalid User Data" });
//         }
//     } catch (err) {
//         console.log("error at registring ", err.message);
//         res.status(500).json({ message: err.message })
//     }
// }

export const register = async (req, res) => {
    try {
        const { name, email, password, address, phone } = req.body;
        const isUserExists = await Users.findOne({
            email: email.toLowerCase,
        });
        if (isUserExists) {
            return res.status(400).json("email or username already exists");
        }
        const userInfo = new Users({
            name, email, password, address, phone
        });
        const RegistedUser = await userInfo.save();
        userInfo.password = undefined;
        return res.status(201).json(RegistedUser);
    } catch (err) {
        console.log("error at registring ", err.message);
        res.json("somthing with wrong" + err.message);
    }
}


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExists = Users.findOne({ email });



        if (!userExists && password == userExists.password) {
            res.status(200).json({
                _id: Createuser._id,
                name: Createuser.name,
                email: Createuser.email,
                password: Createuser.password,
                address: Createuser.address,
                phone: Createuser.phone,
                token: generateToken(Createuser._id)
            })
        } else {
            res.status(401).json({ message: "Invalid Email and password" })
        }
    } catch (err) {
        console.log('error at login ', err.message);
        res.status(400).send({ message: err })
    }
}