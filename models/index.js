const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');

const Page = db.define("pages", {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  }
})

const User = db.define("users", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    isEmail: true
  },
})

async function syncDatabase() {
  await db.sync({force: true})
}

module.exports = {
  db, Page, User, syncDatabase
}
