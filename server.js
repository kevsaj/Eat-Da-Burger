const express = require('express');
const app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// app.get('/', function (req, res) {
//     res.render('index');
// });

const routes = require('./controllers/controller');
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
});