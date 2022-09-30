const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const keys = require('./config/keys');

const app = express();
const PORT = 3005;

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

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
