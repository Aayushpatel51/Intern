
const express = require('express');
const cors = require('cors');
const cookieSession = require('cookie-session');
const session = require('express-session');
const passportSetup = require('./passport')
const authRoute = require('./routes/auth')
const passport = require('passport');
const app = express();

//how long the session will be stored
app.use(cookieSession(
    {
        name: 'session',
        keys:['aayush'],
        maxAge: 24 * 60 * 60 * 100 // only 24 hours
    }
));
// app.use(session({
//     resave: false,
//     saveUninitialized: true,
//     secret: 'SECRET'
// }));

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin: 'http://localhost:3000',
    method: 'GET, POST, PUT, OPTIONS, DELETE',
    credentials: true,
}))

app.use("/auth", authRoute);

app.listen("5000", ()=>{
    console.log("server is running")
})