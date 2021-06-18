const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers');
const apiRoutes = require('./controllers/api');
const path = require('path');

const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// set up express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// set up Handlebar.js as template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// connect express-session to database
const sess = {
    secret: process.env.Sess_Secret,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

// turn on routes
app.use(routes);
//app.use(apiRoutes);

// connect database to server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});