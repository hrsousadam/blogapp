if (process.env.NODE_ENV === 'production') {
  module.exports = { mongoURI: "mongodb+srv://hrsousadam:<Mongo1234>@cluster0.ddx2yyd.mongodb.net/" };
} else {
  module.exports = {mongoURI:'mongodb://localhost/blogapp'}
}
