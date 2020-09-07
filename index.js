const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const engines = require('consolidate');
const path = require('path');

//Routes
const routes = require('./src/routes/routes');

//Load environment
require('./src/config/getEnv')()

const app = express();

app.get('/', (req, res) => {
    return res.send("Hello World");
})

app.use(cors());
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

//For render views
app.engine("ejs", engines.ejs);
app.set('views', path.join(__dirname, './src/views'));
app.set("view engine", "ejs");

//Payments route
app.use('/payments',routes);

app.use(routes);

app.listen(process.env.API_PORT, function(err){
    if(err) console.error(err);
    console.log(`API INICIADA NA PORTA ${process.env.API_PORT}`) 
});