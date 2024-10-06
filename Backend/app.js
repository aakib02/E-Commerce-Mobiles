const express = require('express');
const api = require('../Backend/router/api')
const cors = require('cors')
const app = express();
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/ecommerce').then(()=>{
console.log('database is successfully connected');
})
app.use(express.json())
app.use(cors())

const port = 5001;
app.use('/api',api)
app.listen(port, () => {
  console.log(`Your server is running on port ${port}`);
});
