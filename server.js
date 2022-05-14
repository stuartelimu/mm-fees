const express = require('express');
const serveIndex = require('serve-index');

const app = express();

app.use('/public', express.static('public'));
app.use('/public', serveIndex('public'));

app.get('/', (req,res) => {
  res.send('MM Fess');
});

app.use((req, res, next) => {

 console.log('Time: ', Date.now());
 next();

});

app.listen(3000, () => console.log('server listening on port 3000.'));
