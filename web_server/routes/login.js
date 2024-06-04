const express = require("express")
//const session = require('express-session')
const neo4jSession = require("../utilities/neo4j_connection");
const router = express.Router()
const User = require("../models/user")

// Display the registration form
router.get("/", (req, res) => {
  res.render("login");   
});

// Handle form submission
router.post('/', async (req, res) => {
  try {
    //console.log(req.body);
    const { username, password } = req.body;    
    
    const result = await User.find({username : username , password : password}).exec(); 
    console.log("result" + result)    
    userExists = Object.keys(result).length > 0
    console.log("userexists" + userExists)     

    if (!userExists){     
      res.redirect('/?message=The username or password is wrong');
    } else{      
      //console.log("session" + JSON.stringify({...result["0"], ...result["0"].address}))
      req.session.user = { "username" : result["0"].username, "email": result["0"].email, "firstName" : result["0"].firstName , "lastName": result["0"].lastName  , ...result["0"].address};
      res.redirect('/')
    }    

  } catch (error) {
    console.error(error);
    res.status(400).send('Error registering user');
  }
});

module.exports = router;