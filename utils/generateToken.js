import jwt from 'jsonwebtoken'

const generateToken = (id) => {


    return jwt.sign({ id }, process.env.JWT_SECRATE)
}

export default generateToken