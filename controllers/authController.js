const User = require('../model/User');
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
require('dotenv').config();

// const Role = require('../model/Role');

const handleLogin = async (request,response) => {
    const { email, password} = request.body;
    if(!email || !password){         
        return response.status(400).json({ "message":"email and password are needed" })
    };
    
    const foundUser = await User.findOne({ email }).exec();
    if(!foundUser){           
        return response.status(401);
    }
    
    const match = await bcrypt.compare( password, foundUser.password);
    if(match){
        const roleId = foundUser.roleId   
                                    
        const accessToken = jwt.sign(
            { "UserInfo":{
                "first_name": foundUser.first_name,
                "roleId":roleId
            }
             },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn:'1d' }

        );
        const refreshToken = jwt.sign(
            { "first_name": foundUser.first_name },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn:'10d' }

        );  
        // saving refresh token with current user
        foundUser.refreshToken = refreshToken;
        const result = await foundUser.save();
        console.log(result);

        response.cookie( 'jwt', refreshToken, { httpOnly:true, sameSite:'none', secure:true, maxAge:24*60*60*1000 } );
        response.json({ 
            "data":{
                "_id": foundUser._id,
                "first_name": foundUser.first_name,
                "last_name": foundUser.last_name,
                "email": foundUser.email,
                "mobile": foundUser.mobile,
                "roleId":foundUser.roleId
              },
            "token":accessToken });

        // const findid = await Role.find({ '_id':foundUser.roleId }).exec();
        // console.log(findid);
        //  request.roles = findid.scopes; 
    } 
    else{
        return response.sendStatus(401);
    }

};



module.exports = { handleLogin };