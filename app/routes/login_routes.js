var ObjectID = require('mongodb').ObjectID;

module.exports = (app, db)=>{
  app.post('/login/logged', (req, res)=>{
    var queryer = {title: req.body.team_title, manager: req.body.team_manager};
    console.log(queryer);
    db.collection("teams").findOne(queryer, (err, result) => {
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
        if(result == null){

        }
        else{
          // console.log(result);
          res.redirect("/index");
        }
      }
    })
  })
}
