if (process.env.NODE_ENV === 'production') {
  module.exports = { mongoURI: "mongodb+srv://hrsousadam:<Mongo1234>@cluster0.id10kwn.mongodb.net/" };
} else {
  module.exports = { mongoURI: 'mongodb://localhost:27017/blogapp' };
}
