const express = require('express');
const app = express();
const request = require('request');
const bodyParser = require('body-parser');
const https = require('https');
const { response } = require('express');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.listen(3000, function () {
    console.log('Server is running on port 3000');
});
const apiKey = 'c5dd3973b03e8e57446038d2b302c8a7-us21';
const addKey = '37838b638e';





app.post('/', function (req, res) {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;


    var data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName,
                    EMAIL: email
                }
            }]
    };

    var jsonData = JSON.stringify(data);
    var url = 'https://us21.api.mailchimp.com/3.0/lists/37838b638e'; // add your list id here
    var options = {
        method: "POST",
        auth: 'Bahaa:c5dd3973b03e8e57446038d2b302c8a7-us21'
    };

    const requests = https.request(url, options, (response) => {
        response.on('data', (data) => {
            console.log(JSON.parse(data));
        })
    });
    requests.write(jsonData);
    requests.end();

});

app.get('/', function (req, res) {
   

    res.sendFile(__dirname + '/signup.html');
});

app.get('/failure' (req,res)=>{
    res.sendFile(__dirname + '/sucess.html');
})

app.post('/post', ()=>{
    if(response.statusCode === 200)
    {
        res.sendFile(__dirname + '/sucess.html');
    }
    else
    {
        res.sendFile(__dirname + '/failure.html');
    }
});
//post

