const express = require("express");
const router = express.Router();
const User = require("../models/user");
const neo4jSession = require("../utilities/neo4j_connection");

// Display the registration form
router.get("/", (req, res) => {
  res.render("register");   
});

// Handle form submission
router.post('/', async (req, res) => {
  try {
    console.log(req.body);
    const { username, password, email, firstName, lastName, street, city, state, zip } = req.body;
    console.log({ username, password, email, firstName, lastName, street, city, state, zip });
    
    let userExists = await User.find({username : username}).exec();      
    userExists = Object.keys(userExists).length > 0

    if (!userExists){
      const address = { street, city, state, zip };
      const newUser = new User({ username, password, email, firstName, lastName, address });
      await newUser.save();  
      await neo4jSession.run(
        'CREATE (u:User {username: $username})',
        { username }
      );  

      const categories = ['to do', 'in progress', 'finished'];
      for (const category of categories) {
        await neo4jSession.run(
          'MATCH (u:User {username: $username}) CREATE (u)-[:HAS_CATEGORY]->(c:Category {name: $category})',
          { username, category }
        );
      }

      res.redirect('/?message=User registered successfully');
    } else{
      res.redirect('/?message=User already exists');
    }    

  } catch (error) {
    console.error(error);
    res.status(400).send('Error registering user');
  }
});

module.exports = router;