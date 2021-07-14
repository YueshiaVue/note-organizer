const express = require("express");
const apiRoute = require("./routes/apiRoute");
const htmlRoute = require("./routes/htmlRoute");
const path = require("path");
const router = express.Router()

// Start app and create a port
const app = express();
const PORT = process.env.PORT || 3000

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

app.get("/api/notes",
(req,res) => {
        let data = apiRoute.getNotes();
        res.send(data);
});

app.post("/api/notes",(req,res)=> {
        let data = req.body;
        console.log('data',data);
        // console.log('response',res);
        apiRoute.saveNotes(data);
});

app.use('/', router);

// Starts server
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });