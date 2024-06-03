const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err);
      return res.redirect('/?message=Logout failed');
    }
    res.clearCookie('connect.sid'); // Ensure the session cookie is cleared
    res.redirect('/?message=Successfully logged out');
  });
});

module.exports = router;