module.exports = (sequelize, Sequelize) => {
    const Blog = sequelize.define("blog", {
      name: {
        type: Sequelize.STRING
      }
    });

    Blog.create({
      name:"acro taxi",
      userId: 1
    })

    Blog.create({
      name:"solo mancer",
      userId: 2
    })

    Blog.create({
      name:"peko rino",
      userId: 3
    })

    Blog.create({
      name:"fata morgana",
      userId: 4
    })

    Blog.create({
      name:"pes trofa",
      userId: 5
    })

    Blog.create({
      name:"tsitus picus",
      userId: 6 
    })
  
    return Blog;
  };