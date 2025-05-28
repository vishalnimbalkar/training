const {pool} = require('../config/database.js')

const getAllUsers = async()=>{
    try {
        const query = `select * from users`;
        const [result] = await pool.query(query);        
        return result;
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = {getAllUsers}