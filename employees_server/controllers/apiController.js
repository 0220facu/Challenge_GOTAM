const {employee,area, model} = require('../database/models');

const controller = {
    listEmployees: async (req, res) => {
        const employees = await employee.findAll({include:["area"]}).catch(err => console.log(err));

        
        res.json({
            count: employees.length,
            employees:employees
        });
    },
    listAreas: async (req, res) => {
        const Areas = await area.findAll().catch(err => console.log(err));

        
        res.json({
            count: Areas.length,
            Areas:Areas
        });
    },
    createEmployee: async (req, res) => {
        const newEmployee = await employee.create({
            full_name:req.body.Name,
            identification_document: req.body.document,
            birth_date:req.body.birthDate,
            delevoper: req.body.Dev_cbox == "Dev"?  1 : 0 ,
            description:req.body.description,
            area_id:req.body.area
        })
        return res.redirect('http://localhost:3001/');
    },
    deleteEmployee: async (req,res) =>{
        const id = req.params.id;
        
        const employeeToDelete = await employee.findByPk(id);

        await employeeToDelete.destroy()

        return res.redirect('http://localhost:3001/');
    }
}
module.exports = controller;