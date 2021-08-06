const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.set('port', 8000);

app.use('/salao', require('./src/routes/salao.routes'));

app.listen(app.get('port'), () => {
    console.log(`WS Escutando na perta ${app.get('port')}`);
});