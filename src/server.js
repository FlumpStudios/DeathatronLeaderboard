import sequelize from './config/db.js';
import Score from './models/score.js';
import dotenv from 'dotenv';

dotenv.config();

import app from './app.js';

const PORT = process.env.PORT || 3000;

try {
  await sequelize.authenticate();
  console.log('Connection to SQLite has been established successfully.');
  await sequelize.sync(); // creates tables if they don't exist
  console.log('Database synced.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});