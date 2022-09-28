const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3005;

mongoose.connect(
  'mongodb+srv://Lostintime:Lostintime2415@cluster0.deszira.mongodb.net/Project',
  { useNewUrlParser: true }
);

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log('Server started!');
});
