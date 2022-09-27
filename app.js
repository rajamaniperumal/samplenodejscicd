const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require("./middleware/auth.js");

const mongoose = require("mongoose");
const uri = "mongodb+srv://mongodbadmin:Raja05mani@cluster0.fbusgnt.mongodb.net/?retryWrites=true&w=majority";
const User = require("./models/user.js");


//Middleware to execute before kickoff any action
app.use(bodyParser.json());


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



app.post("/api/welcome", auth, (req, res) => {
    res.status(200).send("Welcome 🙌 ");
});

app.get('/', (req, resp) => {

    resp.status(200).send("Hello welcome Rajamani");
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
            return res.status(200).json(user);
        }
        res.status(400).send("Invalid Credentials");
    } catch (err) {
        console.log(err);
    }
    // Our register logic ends here
});

app.listen(process.env.PORT || 5000);

module.exports = app;