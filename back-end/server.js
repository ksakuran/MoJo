// load .env data into process.env
require('dotenv').config();

// Web server config
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const PORT = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

const checklistApiRoutes = require('./routes/checklist-router');
const daySelectionApiRoutes = require('./routes/daySelection-router');
const journalApiRoutes = require('./routes/journal-router');
const moodApiRoutes = require('./routes/mood-router');
const moodscapeApiRoutes = require('./routes/moodscape-router');
const userApiRoutes = require('./routes/user-router');
const weatherApiRoutes = require('./routes/weather-router');

app.use('/api/checklist', checklistApiRoutes);
app.use('/api/daySelection', daySelectionApiRoutes);
app.use('/api/journal', journalApiRoutes);
app.use('/api/mood', moodApiRoutes);
app.use('/api/moodscape', moodscapeApiRoutes);
app.use('/api/user', userApiRoutes);
app.use('/api/weather', weatherApiRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});