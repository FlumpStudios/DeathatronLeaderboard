import Score from '../models/score.js';

const getAll = async () => {
  return await Score.findAll({
    order: [['score', 'DESC']],
    limit: 10
  });
};

const add = async (entry) => {
  return await Score.create(entry);
};

export default {
  getAll,
  add
};