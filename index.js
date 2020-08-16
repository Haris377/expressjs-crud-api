const express = require("express");
const path = require("path");
const members = require('./Members');
const app = express();
const logger = require('./middleware/logger');

// Init middleware
//app.use(logger);

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// send id then return 
// app.get('/api/members/:id', (req, res) => {
//   res.send(req.params.id)
// });

// Set static folder
//app.use(express.static(path.join(__dirname, "public")));

//Get all members
//app.get('/api/members', (req, res) => res.json(members))

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Homepage Route
app.get("/", (req, res) =>
  res.render("index", {
    title: "Member App",
    members,
  })
);

// Default routes
const routes = require('./routes/api/member') 
app.use("/api/members", routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
