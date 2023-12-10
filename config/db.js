if(process.env.Node_ENV=='production'){
    module.exports = {mongoURI:"mongodb+srv://hrsousadam:<password>@cluster0.id10kwn.mongodb.net/"}
  }else{
    module.exports = {mongoURI:'mongodb://localhost:27017/blogapp'}
  }
  