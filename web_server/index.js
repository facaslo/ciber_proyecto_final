const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const session = require("express-session")
const login_route = require("./routes/login");
const register_route = require("./routes/register");
const home_route = require("./routes/home")
const logout_route = require('./routes/logout'); 
const app = express();
const port = 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'your_secret_key', // Replace with your own secret key
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // Set to true if using HTTPS
}));

// Static files
app.use("/css",express.static("./node_modules/bootstrap/dist/css"));
app.use("/js",express.static("./node_modules/bootstrap/dist/js"));
app.use("/custom_static", express.static("./static"))

// Stablish connection to mongodb database
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/userDB';
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Set up engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use("/login",login_route);
app.use("/register",register_route);
app.use('/logout', logout_route); 
app.use("/", home_route);

// Handle 404
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

app.listen(port, () => {
	console.log("Server is listening in port " + port)
});
