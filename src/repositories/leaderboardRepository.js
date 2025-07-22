import Score from '../models/score.js';

const getAll = async () => {
  return await Score.findAll({
    order: [['score', 'DESC']],
    limit: 10
  });
};

const getScores = async (skip, take, isDesc) => {
  return await Score.findAll({
    order: [['score', isDesc ? 'DESC' : 'ASC']],
    offset: skip,
    limit: take
  });
};

const getScore = async (playerId) => {
  return await Score.findOne(
    {
        where: {playerId}      
    }
  )
};

const add = async (entry) => {
  const { playerId, score } = entry;
  const currentEntry = await Score.findOne({ where: { playerId } });
  if (currentEntry) {
    if (score > currentEntry.score) {
      await currentEntry.update(entry);
    }
  } else {
    await Score.create(entry);
  }
};

export default {
  getAll,
  add,
  getScores,
  getScore
};