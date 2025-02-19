import Users from "../model/userModel.js";
import generateToken from "../utils/generateToken.js";

// export const register = async (req, res) => {
//     try {
//         const { name, email, password, phone, address, } = req.body;

//         const userExists = await Users.findOne({ email })
//         if (userExists) {
//             return res.status(400).json({ message: 'user already exist' })
//         }
//         const user = new Users({
//             name, email, password, phone, address

//         })

//         await user.save();

//         if (user) {
//             res.status(201).json({
//                 _id: user._id,
//                 name: user.name,
//                 email: user.email,
//                 password: user.password,
//                 phone: user.phone,
//                 address: user.address,
//                 // token: generateToken(user._id)


//             })
//         } else {
//             res.status(401).json({ message: ' Invalid User Data' })
//         }
//     }


//     catch (error) {
//         res.status(500).json({ error: error.message })
//     }
// }

export const register = async (req, res) => {

    try {
        const { name, email, password, phone, address } = req.body;

        const userExists = await Users.findOne({ email })
        if (userExists) {
            return res.status(400).json("User already exist");
        }


        const user = new Users({
            name, email, password, address, phone
        })

        await user.save();
        return res.status(201).json({
            message: 'User Registered succfessfly',
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                password: user.password,
                token: generateToken(user._id)
            }
        })

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'server error You Knoww..' });
    }

}


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await Users.findOne({ email });
        if (user && password == user.password) {
            res.status(200).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                password: user.password,
                phone: user.phone,
                address: user.address,
                token: generateToken(user._id)

            })
        } else {
            return res.status(404).json({ message: ' Invalid Email or password' })
        }

    } catch (error) {
        res.status(500).json({ error: error.message })

    }
}