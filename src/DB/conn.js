const mongoose = require("mongoose");

mongoose.connect("mongodb://mogoservername/Databasname", {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(()=>{
    console.log("Database Connection Succefully create");

}).catch((error)=>{
    console.log(error);
})

