const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const PORT = 3000;

//specific routes
const classesRoute = require('./routes/classes');

app.listen(PORT, () => console.log(`O Express está rodando na porta ${PORT}`));

//body parser
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use('/get-classes', classesRoute);