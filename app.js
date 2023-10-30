const express  = require('express')
const router  =  express.Router();
const app = express();
const bodyParser =  require('body-parser');
const routes =  require('./routes/routes');
const config = require('./config/config')
app.set('view engine', 'ejs');
app.use(express.static('assets'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',routes);
const port = config.server.PORT;
app.listen(port,(err)=>{
    if(err){
    console.log('error is occur: ' + err);
    }
    console.log(`Server is running ${port}`)
})