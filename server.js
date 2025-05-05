const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qwerty', // Replace with your MySQL password
    database: 'kohi_n_pan' // Replace with your database name
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

// Handle registration
app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      // Check if the email already exists
      const checkSql = 'SELECT * FROM user WHERE email = ?';
      db.query(checkSql, [email], async (err, results) => {
        if (err) {
          console.error('Error checking user:', err);
          res.status(500).send('Error registering user');
          return;
        }
  
        if (results.length > 0) {
          res.status(400).send('Email already exists');
          return;
        }
  
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        const sql = 'INSERT INTO user (name, email, password) VALUES (?, ?, ?)';
        db.query(sql, [name, email, hashedPassword], (err, result) => {
          if (err) {
            console.error('Error inserting user:', err);
            res.status(500).send('Error registering user');
            return;
          }
          res.send('User registered successfully!');
        });
      });
    } catch (error) {
      console.error('Error hashing password:', error);
      res.status(500).send('Error registering user');
    }
  });

// Handle login
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    console.log('Login request received:', { email, password });

    const sql = 'SELECT * FROM user WHERE email = ?';
    db.query(sql, [email], async (err, results) => {
        if (err) {
            console.error('Error fetching user:', err);
            res.status(500).send('Error logging in');
            return;
        }

        console.log('Database query results:', results);

        if (results.length === 0) {
            res.status(401).send('Invalid email or password');
            return;
        }

        const user = results[0];
        const isPasswordValid = await bcrypt.compare(password, user.password);

        console.log('Password validation result:', isPasswordValid);

        if (!isPasswordValid) {
            res.status(401).send('Invalid email or password');
            return;
        }

        // Login successful
        res.json({ message: 'Login successful', user: { id: user.id, name: user.name, email: user.email } });
    });
});
// Handle adding items to the cart
app.post('/cart', (req, res) => {
    const { user_id, product_id, quantity } = req.body;

    if (!user_id) {
        res.status(400).send('User ID is required');
        return;
    }

    const sql = `
        INSERT INTO cart (user_id, product_id, quantity)
        VALUES (?, ?, ?)
        ON DUPLICATE KEY UPDATE quantity = quantity + VALUES(quantity)
    `;
    db.query(sql, [user_id, product_id, quantity], (err, result) => {
        if (err) {
            console.error('Error adding to cart:', err);
            res.status(500).send('Error adding to cart');
            return;
        }
        res.send('Item added to cart successfully!');
    });
});

// Handle fetching cart items
app.get('/cart/:user_id', (req, res) => {
    const { user_id } = req.params;

    const sql = 'SELECT * FROM cart WHERE user_id = ?';
    db.query(sql, [user_id], (err, results) => {
        if (err) {
            console.error('Error fetching cart:', err);
            res.status(500).send('Error fetching cart');
            return;
        }
        res.json(results);
    });
});

// Handle logout and clear the cart
app.post('/logout', (req, res) => {
    const { user_id } = req.body;

    if (!user_id) {
        res.status(400).send('User ID is required');
        return;
    }

    const sql = 'DELETE FROM cart WHERE user_id = ?';
    db.query(sql, [user_id], (err, result) => {
        if (err) {
            console.error('Error clearing cart:', err);
            res.status(500).send('Error clearing cart');
            return;
        }
        res.send('Cart cleared successfully!');
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Default route to serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});