import sql from 'better-sqlite3';

const db = sql('meals.db');

const getMeals = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  // throw new Error('Failed to fetch meals');
  return db.prepare('SELECT * FROM meals').all();
};

export { getMeals };
