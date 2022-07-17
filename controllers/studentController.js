const Student = require('../model/Student');


const createStudent = async (request,response)=>{
    const { name, userId, schoolId, created, updated } = request.body;
    const result = await Student.create({
        name:name,
        userId:userId,
        schoolId:schoolId,
        created:new Date(), 
        updated:null
    });
    response.json(result);
}


const getAllStudents = async (request,response)=>{
    const result = await Student.find().exec();
    response.json(result);
}

module.exports = { createStudent, getAllStudents }