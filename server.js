const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(require('./routes'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//connects mongoose when we start the app
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/social-network', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

app.listen(PORT, () => {
    console.log('API server now on port ${PORT}!');
});