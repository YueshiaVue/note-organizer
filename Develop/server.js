const express = require("express");
const apiRoute = require("./routes/apiRoute");
const htmlRoute = require("./routes/htmlRoute");
const path = require("path");
const router = express.Router()

// Start app and create a port
const app = express();
const PORT = process.env.PORT || 1000

// router.get('/',function(req,res) {
//         res.sendFile(path.join(__dirname+'/public/index.html'));
// });



// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post("/api/notes",(res,req)=> {
        let data = res.body.query;
        console.log('response',data);
        console.log('req',req);
        apiRoute.saveNotes(data);
})

app.use('/', router);

// Starts server
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });