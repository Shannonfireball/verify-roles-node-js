const School = require('../model/School');


const CreateSchool = async (request,response) => {
    const { name,city,state,country } = request.body;

    const result = await School.create({ name,city,state,country})
    response.json({result});
}

const getAllSchools = async (request,response)=>{
    const result = await School.find().exec();
    response.json(result);
}

module.exports = { CreateSchool, getAllSchools }