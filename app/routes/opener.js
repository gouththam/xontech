module.exports = (app)=>{
  app.get("/index", function(req, res){
  res.render('index');
  })

  app.get("/", function(req, res){
  res.render('index');
  });

  app.get("/register", function(req, res){
  res.render('register');
  });

  app.get("/login", function(req, res){
  res.render('login');
  });
}
