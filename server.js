/**
 * Required External modules
 */
const express = require('express');
const path = require('path');
const serveIndex = require('serve-index');

/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "5000";

/**
 * App Configuration
 */

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, 'public')));


/**
 * Routes Definition
 */

app.get('/', (req,res) => {
  res.render('index', {title: "Home"})
});

/**
 * Server Activation
 */





app.use('/public', serveIndex('public'));



app.use((req, res, next) => {

 console.log('Time: ', Date.now());
 next();

});

app.listen(port, () => console.log(`server listening on port ${port}.`));
