module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      name: {
        type: Sequelize.STRING
      },
      mail: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }
    });
  
    // CREATE MOCK USERS
    User.create({
      id: 1,
      name: "Alpha",
      mail: "mailer@tist.com",
      password: "aaa123"
    });

    User.create({
      id: 2,
      name: "Betas",
      mail: "betas@tist.com",
      password: "aaa123"
    });

    User.create({
      id: 3,
      name: "Petter",
      mail: "kiko@tist.com",
      password: "aaa123"
    });

    User.create({
      id: 4,
      name: "Eposios",
      mail: "weare@tist.com",
      password: "aaa123"
    });

    User.create({
      id: 5,
      name: "Sarcas",
      mail: "sarcas@tist.com",
      password: "aaa123"
    });

    User.create({
      id: 6,
      name: "Brosto",
      mail: "brosto@tist.com",
      password: "aaa123"
    });

    return User;
  };