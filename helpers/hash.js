import bcrypt from "bcrypt"

export const hashString = async (password) => {
    return await bcrypt.hash(password, 10)
}