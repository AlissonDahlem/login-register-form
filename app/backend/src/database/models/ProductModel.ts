import { Model, INTEGER, STRING, BOOLEAN, INET } from 'sequelize'
import db from '.';
import Users from './UserModel';

class Products extends Model {
  declare id: number;
  declare name: string;
  declare price: number;
  declare description: string;
  declare images: string;
  declare userId: number;
}

Products.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  price: {
    type: INTEGER,
    allowNull: false,
  },
  description: {
    type: STRING,
    allowNull: false,
  },
  images: {
    type: STRING,
    allowNull: true,
  },
  userId: {
    type: INTEGER,
    allowNull: false,
    field: 'user_id'
  }
}, {
  underscored: true,
  sequelize: db,
  modelName: 'products',
  timestamps: true,
});

Products.belongsTo(Users, {
  foreignKey: 'userId',
  targetKey: 'id',
  as: 'role_id'
})

export default Products;