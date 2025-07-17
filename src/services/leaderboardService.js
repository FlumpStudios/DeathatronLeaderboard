import leaderboardRepository from '../repositories/leaderboardRepository.js';

const getLeaderboard = () => {
  return leaderboardRepository.getAll();
};

const addScore = (player, score) => {
  return leaderboardRepository.add({ player, score });
};

export default {
  getLeaderboard,
  addScore
};