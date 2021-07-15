const express = require("express");
// const apiRoute = require("./routes/apiRoute");
// const htmlRoute = require("./routes/htmlRoute");
const path = require("path");
const router = express.Router()

// Start app and create a port
const app = express();
const PORT = process.env.PORT || 3001
// htmlRoute(router);
const uniqId = require("uniqId");
let database = require("./db/noteData");

router.get('/',function(req,res) {
    res.sendFile(path.join(__dirname+'/public/index.html'));
});


router.get('/notes',function(req,res) {
    res.sendFile(path.join(__dirname+'/public/notes.html'));
});

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// apiRoute(app);

  app.get("/api/notes",(req,res) => {
            res.send(database);
    });

    app.delete("/api/notes",(req,res)=>{
            let id = req.body.id;
            database = database.filter((obj)=>{
                return obj.id !== id;
            })
            res.send(database);
    })

    app.post("/api/notes",(req,res)=> {
            let data = req.body;
            data.id = uniqId();
            database.push(data);
            res.send(database);
    });

app.use('/', router);

// Starts server
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });