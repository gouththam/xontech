const mainroute = require('./home_routes');
const loginroute = require('./login_routes');
const home_R = require('./opener');


module.exports = function (app, db){
  home_R(app);

  if(app.post("/register/signed")){
    mainroute(app, db);
  }
  if (app.post("/login/logged")) {
    loginroute(app, db);
  }

}
