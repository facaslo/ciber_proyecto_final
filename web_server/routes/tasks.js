const express = require("express")
//const session = require('express-session')
const neo4jSession = require("../utilities/neo4j_connection");
const router = express.Router()
const User = require("../models/user")


router.post("/", async(req, res) => {

  try {
    const {username} = req.body;
        
    const result = await User.find({username : username}).exec();         
    const userExists = Object.keys(result).length > 0     

    if (!userExists){     
      res.redirect('/?message=Wrong request');
    } else{
      let tasks = []
      await neo4jSession.run(
        'MATCH (u:User {username: $username})-[:HAS_CATEGORY]->(c:Category)-[:HAS_TASK]->(t:Task) RETURN c.name,t.title, t.description',
        { username }
      ).then((result) => {
        result.records.forEach((record) => {
          const row = { category: record.get('c.name'), task_title: record.get('t.title'), description: record.get('t.description') }
          tasks = [...tasks, row]
        })
      })
      .catch((error) => {
        console.log(error)
        throw (error)
      })
      
      console.log("tasks:")
      console.log(tasks)      
      //console.log("session" + JSON.stringify({...result["0"], ...result["0"].address}))
      res.status(200).send(tasks)
    }    

  } catch (error) {
    console.error(error);
    res.status(400).send('Error retrieven user to do list');
  }  
});

module.exports = router