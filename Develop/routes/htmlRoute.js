const path = require("path");

const htmlRoute = (router)=> {
    router.get('/',function(req,res) {
        res.sendFile(path.join(__dirname+'/../public/index.html'));
    });
    

    router.get('/notes',function(req,res) {
        res.sendFile(path.join(__dirname+'/../public/notes.html'));
    });
}


module.exports = htmlRoute;