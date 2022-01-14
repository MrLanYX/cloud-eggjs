'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const { Model, DataTypes, Deferrable } = Sequelize;
        await queryInterface.createTable('test', {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, comment: '注释' },
            name: DataTypes.STRING(30),
            age: DataTypes.INTEGER,
            created_at: DataTypes.DATE,
            updated_at: DataTypes.DATE,
        });
    },

    down: async queryInterface => {
        await queryInterface.dropTable('test');
    }
};