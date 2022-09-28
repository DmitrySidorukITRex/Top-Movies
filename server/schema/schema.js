const graphql = require('graphql');
const Movies = require('../models/movie');
const Directors = require('../models/director');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLFloat,
} = graphql;

const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: new GraphQLNonNull(GraphQLString) },
    genre: { type: new GraphQLNonNull(GraphQLString) },
    rate: { type: new GraphQLNonNull(GraphQLFloat) },
    year: { type: new GraphQLNonNull(GraphQLInt) },
    imgSrc: { type: new GraphQLNonNull(GraphQLString) },
    director: {
      type: DirectorType,
      resolve({ directorId }, args) {
        return Directors.findById(directorId);
      },
    },
  }),
});

const DirectorType = new GraphQLObjectType({
  name: 'Director',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: new GraphQLNonNull(GraphQLString) },
    age: { type: new GraphQLNonNull(GraphQLInt) },
    imgSrc: { type: new GraphQLNonNull(GraphQLString) },
    movies: {
      type: new GraphQLList(MovieType),
      resolve({ id }, args) {
        return Movies.find({ directorId: id });
      },
    },
  }),
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addDirector: {
      type: DirectorType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
        imgSrc: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, { name, age, imgSrc }) {
        const director = new Directors({
          name,
          age,
          imgSrc,
        });
        return director.save();
      },
    },
    addMovie: {
      type: MovieType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        rate: { type: new GraphQLNonNull(GraphQLFloat) },
        year: { type: new GraphQLNonNull(GraphQLInt) },
        imgSrc: { type: new GraphQLNonNull(GraphQLString) },
        directorId: { type: GraphQLString },
      },
      resolve(parent, { name, genre, rate, year, imgSrc, directorId }) {
        const movie = new Movies({
          name,
          genre,
          rate,
          year,
          imgSrc,
          directorId,
        });
        return movie.save();
      },
    },
    deleteDirector: {
      type: DirectorType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, { id }) {
        return Directors.findByIdAndRemove(id);
      },
    },
    deleteMovie: {
      type: MovieType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, { id }) {
        return Movies.findByIdAndRemove(id);
      },
    },
    updateDirector: {
      type: DirectorType,
      args: {
        id: { type: GraphQLID },
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
        imgSrc: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, { id, name, age, imgSrc }) {
        return Directors.findByIdAndUpdate(
          id,
          { $set: { name, age, imgSrc } },
          { new: true }
        );
      },
    },
    updateMovie: {
      type: MovieType,
      args: {
        id: { type: GraphQLID },
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        rate: { type: new GraphQLNonNull(GraphQLFloat) },
        year: { type: new GraphQLNonNull(GraphQLInt) },
        imgSrc: { type: new GraphQLNonNull(GraphQLString) },
        directorId: { type: GraphQLString },
      },
      resolve(parent, { id, name, genre, rate, year, imgSrc, directorId }) {
        return Movies.findByIdAndUpdate(
          id,
          { $set: { name, genre, rate, year, imgSrc, directorId } },
          { new: true }
        );
      },
    },
  },
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    movie: {
      type: MovieType,
      args: { id: { type: GraphQLID } },
      resolve(parent, { id }) {
        return Movies.findById(id);
      },
    },
    director: {
      type: DirectorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, { id }) {
        return Directors.findById(id);
      },
    },
    movies: {
      type: new GraphQLList(MovieType),
      resolve(parent, args) {
        return Movies.find({});
      },
    },
    directors: {
      type: new GraphQLList(DirectorType),
      resolve(parent, args) {
        return Directors.find({});
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});
