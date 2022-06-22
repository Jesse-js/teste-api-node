const express    = require('express');
const app        = express();
const cors       = require('cors');
const bodyParser = require('body-parser');
const { logger } = require('./middleware/logEvents');
const PORT = 3000;
//specific routes
const classesRoute = require('./routes/classes');

// custom middleware logger
app.use(logger);

//Cross origin Resource Sharing
app.use(cors());

//app listen port
app.listen(PORT, () => console.log(`O Express está rodando na porta ${PORT}`));

//body parser
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

//test routes
app.get('/',(req,res) => console.log('Welcome to SCL API!'));

//app routes
app.use('/get-classes', classesRoute);