const express  = require('express')
const router  =  express.Router();
const app = express();
const bodyParser =  require('body-parser');
const config = require('./config/config')
const routes =  require('./routes/admin');
// admin routes
app.use('/admin',routes);
app.set('view engine', 'ejs');
app.use(express.static('assets'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
const port = config.server.PORT;
app.listen(port,(err)=>{
    if(err){
    console.log('error is occur: ' + err);
    }
    console.log(`Server is running ${port}`)
})