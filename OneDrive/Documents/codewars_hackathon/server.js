const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Hackathon base check
app.get('/', (req, res) => {
  res.status(200).json({ status: 'success', team: 'the_arambhi', message: 'Backend ready for CodeWars 1.0!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});