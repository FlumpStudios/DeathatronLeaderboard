import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite' // DB file created in project root
});

export default sequelize;