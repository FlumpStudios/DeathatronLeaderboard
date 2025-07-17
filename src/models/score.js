import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Score = sequelize.define('Score', {
  player: {
    type: DataTypes.STRING,
    allowNull: false
  },
  score: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: true // adds createdAt, updatedAt
});

export default Score;