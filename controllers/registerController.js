const User = require('../model/User');

const bcrypt = require('bcrypt');



const handleNewUser = async (request,response) => {
    const { first_name,last_name,email,mobile, password,roleId} = request.body;
    if(!first_name || !password){         
        return response.status(400).json({ "message":"first_name and password are needed" })
    }
                  
    const duplicate = await User.findOne({ first_name: first_name }).exec(); 
    if(duplicate){              
        return response.sendStatus(409);
    }
    try{

        const hashedPwd = await bcrypt.hash( password, 10 );
        // in mongoose you can create and store at the same time
        const result = await User.create({
            "first_name": first_name,
            "last_name":last_name,
            "email":email,
            "mobile":mobile,
            "roleId":roleId,
            "password": hashedPwd
        });
        console.log(result);
        
        response.status(201).json({ "success":`new user ${first_name} created`});
        
    }
    catch(error){      
        response.status(500).json({ "message": error.message });

    }
};



module.exports = { handleNewUser }