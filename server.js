const express = require('express');

const expressHandlebars = require('express-handlebars');

const app = express();

const PORT = process.env.PORT || 8088;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require('./controllers/burgers_controller.js');

app.use(routes);

app.listen(PORT, function() {
    console.log(`App now listening at localhost ${PORT}.`);
});

