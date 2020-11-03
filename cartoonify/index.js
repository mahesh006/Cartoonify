var express = require('express');
const deepai = require('deepai');


// App setup
var app = express();
var server = app.listen(process.env.PORT ||4000, function(){
    console.log('listening for requests on port 4000,app.address().port');
});


// Static files
app.use(express.static('public'));



app.get('/', (req, res) => {
	 res.sendFile(__dirname + '/public/final.html');	
})

