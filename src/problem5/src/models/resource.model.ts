import { Model, DataTypes } from "sequelize";
import sequelize from '../db';

export interface ResourceAttributes {
    id: number;
    title: string;
    description: string;
    status: 'active' | 'inactive';
    createdAt?: Date;
    updatedAt?: Date;
}

class Resource extends Model<ResourceAttributes> implements ResourceAttributes {
    public id!: number;
    public title!: string;
    public description!: string;
    public status!: 'active' | 'inactive';
    public createdAt!: Date;
    public updatedAt!: Date;
}

Resource.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('active', 'inactive'),
      defaultValue: 'active',
    },
}, {
    sequelize,
    modelName: 'Resource',
    timestamps: true,
})

export default Resource;