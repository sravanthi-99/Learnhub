
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/learnhub', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to LearnHub API');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
