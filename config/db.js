if (process.env.NODE_ENV === 'production') {
  // Substitua sua string de conexão atual
module.exports = { mongoURI: 'mongodb+srv://hrsousadam:Mongo1234@cluster.mongodb.net/blogapp?ssl=false' };
;
} else {
  module.exports = {mongoURI:'mongodb://localhost/blogapp'}
}
