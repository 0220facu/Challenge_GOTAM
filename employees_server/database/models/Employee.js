module.exports = (sequelize, dataTypes) => {

    const alias = 'employee';
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            uniqueIndex: true,
            primaryKey: true,
            notNull: true,
            autoIncrement: true
        },
        full_name: {
            type: dataTypes.STRING,
            notNull: true
        },
        identification_document: {
            type: dataTypes.INTEGER,
            uniqueIndex: true
        },
        birth_date: {
            type: dataTypes.DATE
        },
        delevoper: {
            type: dataTypes.INTEGER
        } ,
        description: {
            type: dataTypes.STRING
        },

    };
    const config = {
        tableName : "employees",
        timestamps : false
    };

    const Employee = sequelize.define(alias,cols,config);

    Employee.associate = (models) => {
        Employee.belongsTo(
            models.area,{
                as:"area",
                foreignKey:"area_id"
            }
        )
    };

    return Employee;

}