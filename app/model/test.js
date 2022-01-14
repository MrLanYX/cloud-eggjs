'use strict';

module.exports = app => {
    const { Model, DataTypes, Deferrable } = app.Sequelize;

    const Test = app.model.define('test', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: DataTypes.STRING(30),
        age: DataTypes.INTEGER,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    }, {
        freezeTableName: true,
        underscored: true,
    });

    return Test;
};