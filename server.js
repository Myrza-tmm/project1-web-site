import express from 'express';
import cors from 'cors';
import pkg from 'pg';
const { Pool } = pkg;

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'project',
  password: 'Myrza0775',
  port: 5432,
});

// ТІРКЕЛУ
app.post('/api/register', async (req, res) => {
  const { name, phone, password, group } = req.body;
  try {
    const check = await pool.query('SELECT * FROM users WHERE phone = $1', [phone]);
    if (check.rows.length > 0) {
      return res.status(400).json({ error: 'Бұл нөмір бұрын тіркелген! Кіру бетіне өтіңіз.' });
    }

    await pool.query('INSERT INTO users(name, phone, password, group_name) VALUES($1,$2,$3,$4)', [name, phone, password, group]);
    res.json({ message: 'Тіркелді!' });
  } catch (e) {
    if (e.code === '23505') {
      return res.status(400).json({ error: 'Бұл нөмір бұрын тіркелген! Кіру бетіне өтіңіз.' });
    }
    res.status(500).json({ error: e.message });
  }
});

// КІРУ
app.post('/api/login', async (req, res) => {
  const { phone, password } = req.body;
  try {
    const result = await pool.query('SELECT * FROM users WHERE phone = $1', [phone]);
    if (result.rows.length === 0) {
      return res.status(400).json({ error: 'Бұл нөмір тіркелмеген! Алдымен тіркеліңіз.' });
    }
    if (result.rows[0].password !== password) {
      return res.status(400).json({ error: 'Пароль қате!' });
    }

    const dbUser = result.rows[0];
    const user = {
      id: dbUser.id,
      name: dbUser.name,
      phone: dbUser.phone,
      group: dbUser.group_name,
    };

    res.json({ message: 'Кірдіңіз!', user });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(3000, () => console.log('Backend: http://localhost:3000'));