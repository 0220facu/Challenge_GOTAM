module.exports = (sequelize , dataTypes) => {

    const alias = 'area';
    const cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            uniqueIndex: true,
            notNull: true,
            autoIncrement : true
        },
        area_name:{
            type: dataTypes.STRING,
            notNull: true,
            uniqueIndex: true
        }
    };
    const config = {
        tableName : 'Areas',
        timestamps : false
    };

    const Area = sequelize.define(alias,cols,config);

    Area.associate = (models) => {
        Area.hasMany(
            models.employee,{
                as: "employees",
                foreign_key : "area_id"
            }
        )       
    };

    return Area;
}