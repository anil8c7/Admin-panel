const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config/config');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('assets'));
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', adminRoutes);
app.use('/users', userRoutes);

const port = config.server.PORT;
app.listen(port, (err) => {
    if (err) {
        console.log('Error occurred: ' + err);
    }
    console.log(`Server is running on port ${port}`);
});
