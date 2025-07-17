import leaderboardService from '../services/leaderboardService.js';

export const getLeaderboard = async (req, res, next) => {
  try {
    const data = await leaderboardService.getLeaderboard();
    res.json(data);
  } catch (err) {
    next(err);
  }
};

export const addScore = async (req, res, next) => {
  try {
    const { player, score } = req.body;
    const newEntry = await leaderboardService.addScore(player, score);
    res.status(201).json(newEntry);
  } catch (err) {
    next(err);
  }
};