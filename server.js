const express = require('express');
let PORT;
const app = express();

if (process.env.JAWSDB_URL) {
    PORT = process.env.PORT;
} else {
    PORT = process.env.PORT || 8080;
}


// A 'route' for all static content such as css, imgs, and other, whenever a link to an external file is called
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const routes = require('./controllers/burgers_controller');
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
});