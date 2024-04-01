const e = require('express');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 3000; // Use port 3000 by default
const DB = 'mongodb+srv://kafleanuja1:FitPulse123@cluster0.eqitq8f.mongodb.net/UserInfo?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(DB, {

    // The second argument is an options object with various options for the connection.
}).then(() => {
    // .then() is used to handle the result of promise after it had been resolved or rejected - promise.then(onfullfilled  onrejected)
    console.log(`connection established with db`)
}).catch((e) => console.log('error in connection'));

// .then(() => {...})

//middleware is fucntion that has acess to req obj and res obj and next function in application's req-res cycle
const middleware = (req, res, next) => {
    // response paxi direct arko start so next
    console.log('This is middleware')
    next();
    // n Express.js, next() is a function that is passed to middleware functions and route handlers. It is used to pass control to the next middleware function or route handler in the stack.


}











// Define routes
app.get('/', (req, res) => {
    console.log('main page')
    res.send('Hello, World! This is your Express server.');
});


app.get('/dashboard', middleware, (req, res) => {
    res.send('Hello, World! This is your Dashboard server.');
});
app.get('/signup', (req, res) => {
    res.send('Hello, World! Signup server.');
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});