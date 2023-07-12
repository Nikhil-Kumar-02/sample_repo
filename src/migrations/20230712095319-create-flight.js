'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flightNumber: {
        allowNull: false,
        unique : true,
        type: Sequelize.STRING
      },
      airplaneId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      departureAirportId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      arrivalAirportId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      arrivalTime: {
        allowNull: false,
        type: Sequelize.DATE
      },
      departureTime: {
        allowNull: false,
        type: Sequelize.DATE
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      boardingGate: {
        type: Sequelize.STRING
      },
      totalSeats: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('flights');
  }
};