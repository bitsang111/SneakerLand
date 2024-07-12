"use strict";
const bcrypt = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Admin",
          email: "admin@admin",
          password: await bcrypt.hash("123", 10),
          isAdmin: true,
        },
        {
          name: "User",
          email: "user@user",
          password: await bcrypt.hash("123", 10),
          isAdmin: true,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
