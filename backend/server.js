const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
//const bodyParser = require("body-parser");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const databaseURL = 'mongodb+srv://coolDeveloper:cgfhnfr2010@cluster0.iwnns.mongodb.net/RSClone';
mongoose.connect(databaseURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

const peopleLostRouter = require('./routes/people-lost');
const peopleLookingRelativesRouter = require('./routes/people-looking-relatives');

app.use('/people-lost', peopleLostRouter);
app.use('/people-looking-relatives', peopleLookingRelativesRouter);

const peopleActiveSearch = require('./routes/people-active-search');

app.use('/people-active-search', peopleActiveSearch);

const peopleCloseSearch = require('./routes/people-close-search');

app.use('/people-close-search', peopleCloseSearch);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);    
});

let HumanLost = require('./models/Human-lost');
let HumanLookingRelatives = require('./models/Human-looking-relatives');

const user = require("./routes/user");

app.use("/user", user);

app.route('/').get(async (req, res) => {
        try {
            const peopleLost = await HumanLost.find().lean();
            const peopleLookingForRelatives = await HumanLookingRelatives.find().lean();

            const result = peopleLost.concat(peopleLookingForRelatives);

            res.json(result);
        } catch (err) {
            res.status(400).json('Error: ' + err)
        }
    });
