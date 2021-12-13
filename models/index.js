const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
  // operatorsAliases: false

  // pool: {
  //   max: dbConfig.pool.max,
  //   min: dbConfig.pool.min,
  //   acquire: dbConfig.pool.acquire,
  //   idle: dbConfig.pool.idle
  // }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./users.model")(sequelize, Sequelize);
db.blogs = require("./blogs.model")(sequelize, Sequelize);
db.posts = require("./posts.model")(sequelize, Sequelize);
db.categories = require("./categories.model")(sequelize, Sequelize);

//db relations
db.users.hasOne(db.blogs, { as: "user" });
db.blogs.hasMany(db.categories, { as: "blogid" });
db.categories.hasMany(db.posts, { as: "categoryid" });
db.categories.belongsToMany(db.posts, { through: "postscategories" });
db.posts.belongsToMany(db.categories, { through: "postscategories"});

// let Post = require("./posts.model")(sequelize, Sequelize);
// let Category = require("./categories.model")(sequelize, Sequelize);

// Category.create({
//   name:"food",
//   blogId: { 
//     id: 1
//   }
// })

// Category.create({
//   name:"tech",
//   blogId: 1
// })

// Category.create({
//   name:"sports",
//   blogId: 1
// })

// Category.create({
//   name:"gossip",
//   blogId: 2
// })

// Category.create({
//   name:"nature",
//   blogId: 3
// })


// Post.create({
//   title:"food",
//   text: "Test stextasdtas",
//   categories: [
//     5
//   ]
// },
// {
//   include: ...
// })

module.exports = db;