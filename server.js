const  express= require("express");
const bodyParser= require("body-parser");
const cors= require("cors");

const app = express();

var corsOption={
    origin:"http://localhost:4200"
};

const db = require("./app/models");
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });

app.use(cors(corsOption));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req, res)=>{
    res.json({message: "Welcome"})
});

require("./app/routes/product.routes")(app);
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})