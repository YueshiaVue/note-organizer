const uniqId = require("uniqId");
let database = require("../db/noteData");

module.exports = (app)=> {
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
};