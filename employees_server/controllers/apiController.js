const {employee, model} = require('../database/models');

const controller = {
    listEmployees: async (req, res) => {
        const employees = await employee.findAll({include:["area"]}).catch(err => console.log(err));

        
        res.json({
            count: employees.length,
            employees:employees
        });
    },
    createEmployee: async (req, res) => {
        
    }
}
module.exports = controller;