'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      await queryInterface.bulkInsert('Airplanes' , [
      {
        modelNumber : "Airbus A319-100",
        capacity : 150,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        modelNumber : "Airbus A320-200",
        capacity : 277,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        modelNumber : "Airbus A320neo",
        capacity : 195,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        modelNumber : "Airbus A321-200",
        capacity : 255,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        modelNumber : "Airbus A321neo",
        capacity : 280,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        modelNumber : "Airbus A350-900",
        capacity : 310,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        modelNumber : "Airbus A350-1000",
        capacity : 200,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        modelNumber : "Boeing 737 MAX 8",
        capacity : 190,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        modelNumber : "Boeing 777-300ER",
        capacity : 140,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        modelNumber : "Boeing 777-9",
        capacity : 240,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        modelNumber : "Boeing 787-8",
        capacity : 300,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        modelNumber : "Boeing 787-9",
        capacity : 340,
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
