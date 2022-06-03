
var express = require('express');
var app = express();

var handlebars = require('express-handlebars')
    .create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));


//Routes
app.get('/', function(req, res){ 
    if(req.query.color == 'random'){
        //math function taken from stack overflow
        req.query.color = '#' + Math.floor(Math.random()*16777215).toString(16);
    }
    res.render('home',{color: req.query.color});
    
    
});

app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:'+app.get('port')+'; press Ctrl-C to terminate.');
});

