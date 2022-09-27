require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Tutorial = require("./models/employee.js");
const blogRouter = require("./routes/BlogRoutes");
// importing user context
const User = require("./models/user.js");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require("./middleware/auth");
const cors = require("cors");
const tutorialRouter = require("./routes/tutorial.routes.js");

const app = express();
const port = process.env.PORT || 5000;
const uri = "mongodb+srv://mongodbadmin:Raja05mani@cluster0.fbusgnt.mongodb.net/?retryWrites=true&w=majority";


//Middleware to execute before kickoff any action
app.use(bodyParser.json());
app.use("/api/blogs", blogRouter);
//app.use("/api/tutorial", tutorialRouter);


var corsOptions = {
    origin: "http://localhost:5000"
};

////app.use(cors(corsOptions));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.post("/api/welcome", auth, (req, res) => {
    res.status(200).send("Welcome 🙌 ");
});

/*
mongoose.connect(
    process.env.MONGODB_URI || uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected to MongoDB");
        }
    }
);
*/
/*
//ROUTES
app.get('/', (req, resp) => {

    console.log(add(10, 20));

    resp.status(200).send(emp);
});

*/

app.get('/api/newapi', (req, resp) => {

    resp.status(200).send("Welcome to API world");
});

/*

app.get('/api/getEmployee/:id', (req, resp) => {
    resp.status(200).send(emp.find(e => e.ID == req.params.id));

});


app.get('/api/Employee', (req, resp) => {
    // Create a employee
    const employee = new Tutorial({
        title: "Rajamani",
        description: "Perumal",
        published: true
    });



});


//JWT authentication
// Register
app.post("/api/register", async (req, res) => {

    // Our register logic starts here
    try {
        // Get user input
        const { first_name, last_name, email, password } = req.body;

        // Validate user input
        if (!(email && password && first_name && last_name)) {
            res.status(400).send("All input is required");
        }

        // check if user already exist
        // Validate if user exist in our database
        const oldUser = await User.findOne({ email });

        if (oldUser) {
            return res.status(409).send("User Already Exist. Please Login");
        }

        //Encrypt user password
        encryptedPassword = await bcrypt.hash(password, 10);

        // Create user in our database
        const user = await User.create({
            first_name,
            last_name,
            email: email.toLowerCase(), // sanitize: convert email to lowercase
            password: encryptedPassword,
        });

        // Create token
        const token = jwt.sign(
            { user_id: user._id, email },
            "Rajamani",
            {
                expiresIn: "2h",
            }
        );
        // save user token
        user.token = token;

        // return new user
        res.status(201).json(user);
    } catch (err) {
        console.log(err);
    }
    // Our register logic ends here
});

// Login
app.post("/api/login", async (req, res) => {

    // Our login logic starts here
    try {
        // Get user input
        const { email, password } = req.body;

        // Validate user input
        if (!(email && password)) {
            res.status(400).send("All input is required");
        }
        // Validate if user exist in our database
        const user = await User.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) {
            // Create token
            const token = jwt.sign(
                { user_id: user._id, email },
                "Rajamani",
                {
                    expiresIn: "2h",
                }
            );

            // save user token
            user.token = token;

            // user
            res.status(200).json(user);
        }
        res.status(400).send("Invalid Credentials");
    } catch (err) {
        console.log(err);
    }
    // Our register logic ends here
});


*/
app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});

module.exports = app;