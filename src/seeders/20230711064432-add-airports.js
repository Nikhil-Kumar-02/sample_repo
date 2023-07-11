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

    await queryInterface.bulkInsert('Airports' , [
      {
        name : "Indira Gandhi International Airport",
        address : "delhi",
        cityId : 26,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Chhatrapati Shivaji International Airport",
        address : "Mumbai",
        cityId : 5,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Chennai International Airport",
        address : "Chennai",
        cityId : 14,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Kempegowda International Airport",
        address : "Bangalore",
        cityId : 16,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Rajiv Gandhi International Airport",
        address : "Hyderabad",
        cityId : 17,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : " Kolkata International Airport",
        address : "Kolkata",
        cityId : 13,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Lokpriya Gopinath Bordoloi International Airport",
        address : "Guwahati",
        cityId : 23,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Srinagar International Airport",
        address : "srinagar",
        cityId : 24,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Shaheed Bhagat Singh Airport",
        address : "chandigarh",
        cityId : 25,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Sardar Vallabhbhai Patel International Airport",
        address : "Ahmedabad",
        cityId : 19,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Sri Guru Ram Das Jee International Airport",
        address : "amritsar",
        cityId : 20,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Devi Ahilya Bai Holkar Airport",
        address : "indore",
        cityId : 22,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Birsa Munda Airport",
        address : "Ranchi",
        cityId : 7,
        createdAt : new Date(),
        updatedAt : new Date()
      }

    ], {});
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
