const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const date = require(__dirname + '/date.js');
var items = ['buy food', 'eat food', 'cook food'];
let workItems = [];
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static('public'))
app.set('view engine', 'ejs');
app.get('/', function (reg, res) {
    let day = date.getDate();

    res.render('list', { listTitle: day, newListItems: items, Meow: day });

});

app.get('/work', function (req, res) {
    let day = date.getDay();
    res.render('list', { listTitle: "Work", newListItems: workItems, Meow: day })
})


app.post('/', function (req, res) {
    let item = req.body.newItem;
    console.log(req.body);
    if (req.body.list === 'Work') {
        let item = req.body.newItem;
        workItems.push(item);
        res.redirect('/work')
    }
    else {
        items.push(item);
        res.redirect('/');
    }
    console.log(workItems);
    console.log(items);
});
app.listen(3000, function () {
    console.log('server started on port 3000');
});




    // switch (currentDay) {
    //     case 0:
    //         day = 'Sunday';
    //         break;
    //     case 1:
    //         day = 'Monday';
    //         break;
    //     case 2:
    //         day = 'Tuesday';
    //         break;
    //     case 3:
    //         day = 'Wednesday';
    //         break;
    //     case 4:
    //         day = 'Thursday';
    //         break;
    //     case 5:
    //         day = 'Friday';
    //         break;
    //     case 6:
    //         day = 'Saturday';
    //         break;
    // }