const User = require('../model/User');

const getUser = async (request,response)=>{
    const result = await User.find().exec();
    response.json({result});
}

const getSingle = async (request,response)=>{
    if(!request?.params?.id){
        return response.status(400).json({ "message":"id required " });
    }
    const result = await User.findOne({ _id:request.params.id }).exec();
    if(!result){
        return response.status(204).json({"message":` ${request.body.id} does not exist`})
    }
    response.json(result);
}

module.exports = { getUser,getSingle };