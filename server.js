const express = require('express');
const app = express();
const routes = require('./PlanRoutes');
const cors = require('cors');

const PORT = process.env.port || 4000;

app.use(express.json())
app.use(cors())

const mongoose = require('mongoose');

require('dotenv').config();

mongoose.set('strictQuery', false);

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log('WE ARE CONNECTED TO MONGO!'))
.catch((err) => console.log(err))

app.use(routes);

app.listen(PORT, () => { console.log(`I'm here on PORT ${ PORT }`)})