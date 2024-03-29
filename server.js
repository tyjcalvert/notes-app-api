const express = require('express');
const cors = require('cors');
const sequelize = require('./config/connection');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(routes);

app.use('*', (req, res) => {
  res.status(404).json({ msg: 'Hello World!' });
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on port ' + PORT));
});