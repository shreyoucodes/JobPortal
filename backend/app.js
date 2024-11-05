const express = require('express');
const connection = require('./db');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/users', (req, res) => {
  const query = 'SELECT * FROM UserJob';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching users:', err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(200).json(results);
    }
  });
});

app.get('/hello', (req, res) => {
  console.log('hello');
});

app.post('/login', (req, res) => {
  console.log('test');
  const { email, password } = req.body;

  console.log('Login attempt with email:', email); // Debugging statement

  const query = 'SELECT * FROM UserJob WHERE email = ? AND password = ?';

  connection.query(query, [email, password], (err, results) => {
    console.log(results[0]);

    res.send(results[0]);
    {
      /* if (err) {
      console.error('Error fetching user:', err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } else if (results.length === 0) {
      console.log('No user found with given credentials'); // Debugging statement
      res.status(401).json({ error: 'Invalid email or password' });
    } else {
      console.log('User found:', results[0]); // Debugging statement
      res.status(200).json(results[0]);
    } */
    }
  });
});

// New Signup endpoint
app.post('/signup', (req, res) => {
  const { first_name, last_name, email, user_type, location, password } =
    req.body;

  const query = `
    INSERT INTO UserJob (first_name, last_name, email, user_type, location, password) 
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  connection.query(
    query,
    [first_name, last_name, email, user_type, location, password],
    (err, res) => {
      if (err) {
        console.error('Error inserting user:', err.message);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(201).json({ message: 'User registered successfully!' });
        navigate('/select');
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
