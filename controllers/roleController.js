const Role = require('../model/Role.js');


const CreateRole = async (request,response) => {
    const { name,scopes } = request.body;

    const result = await Role.create({ name,scopes,created:new Date(),updated:null})
    response.json({result});
}

const getAllRoles = async (request,response)=>{
    const result = await Role.find().exec();
    response.json(result);
}

module.exports = { CreateRole, getAllRoles }