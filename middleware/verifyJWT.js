const jwt = require('jsonwebtoken');
require('dotenv').config();

const Role = require('../model/Role.js');

const verifyJWT = async (request,response,next) => {
                        
    const authHeader = request.headers.authorization || request.headers.Authorization;
    if(!authHeader?.startsWith('Bearer ')){
        return response.sendStatus(401);
    }
    
    const token = authHeader.split(' ')[1];
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
         async ( error, decoded )=>{
            if(error) {
                return response.sendStatus(403);
            }
            request.first_name = decoded.UserInfo.first_name;
            const result = await Role.findById({"_id":decoded.UserInfo.roleId});
            
            request.roles = result.scopes;
            next();
        }
    );
}


module.exports = verifyJWT;