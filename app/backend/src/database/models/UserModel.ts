import { Model, INTEGER, STRING, BOOLEAN } from 'sequelize';
import db from '.';
import Roles from './roleModel';

class Users extends Model {
  declare id: number;
  declare firstName: string;
  declare lastName: string;
  declare email: string;
  declare password: string;
  declare role: number;
  declare confirmed: boolean;
  declare confirmationCode: string;
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
  confirmed: {
    type: BOOLEAN,
    allowNull: false,
  },
  confirmationCode: {
    type: STRING,
    allowNull: false,
    field: 'confirmation_code',
  }
}, {
  underscored: true,
  sequelize: db,
  modelName: 'users',
  timestamps: true,
});

Users.belongsTo(Roles, {
  foreignKey: 'roleId',
  targetKey: 'id',
  as: 'role_id'
})

export default Users;
