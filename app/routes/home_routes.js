var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db){
  app.post('/register/signed', (req, res)=>{
    var queryer = {title: req.body.team_title, location: req.body.team_location, manager: req.body.team_manager};

    db.collection("teams").insert(queryer, (err, result) => {
      if(err){
        res.send({"error": "An Error has Occured"});
      }
      else{
        // res.send(result.ops[0]);
        res.redirect('/login');
        console.log("Successfully Registered!!");
      }
    });
  });
}
