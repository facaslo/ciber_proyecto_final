const express = require("express");
const router = express.Router()


router.get("/" , (req,res)=> {
  let authenticated = req.session.user
  /*
  let response = ""
  if (authenticated) {
    console.log(Object.keys(authenticated.response))
    response = JSON.parse(authenticated.response)
    console.log("response !!!!!:" + response)
  }*/
  res.render("home" , {authenticated})
}) 

module.exports = router;