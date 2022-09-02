import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';
import Roles from './roleModel';

class Users extends Model {
  declare id: number;
  declare firstName: string;
  declare lastName: string;
  declare email: string;
  declare password: string;
  declare role: number;
}

Users.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: {
    type: STRING,
    allowNull: false,
    field: 'first_name',
  },
  lastName: {
    type: STRING,
    allowNull: false,
    field: 'last_name'
  },
  email: {
    type: STRING,
    allowNull: false,
  },
  password: {
    type: STRING,
    allowNull: false,
  },
  roleId: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'role_id'
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'users',
  timestamps: true,
});

Users.belongsTo(Roles, {
  foreignKey: 'role_id',
  targetKey: 'id',
  as: 'roleId'
})

export default Users;
