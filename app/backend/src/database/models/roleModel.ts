import { Model, INTEGER, STRING } from 'sequelize';
import db from '.'

class Roles extends Model {
  declare id: number;
  declare roleName: string;
}

Roles.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  roleName: {
    type: STRING,
    allowNull: false,
    field: 'role_name',
  }
}, {
  underscored: true,
  sequelize: db,
  modelName: 'roles',
  timestamps: false,
})

export default Roles;