var server = require('ws').Server;

var CSVToJSON = require('csvtojson');

var s = new server({port: 5001});

s.on('connection', function (ws) {
    try
    {
        CSVToJSON().fromFile("temp.csv").then( data => {
			let i = 0;
			setInterval(function() {
				if (i < data.length) {
					ws.send(JSON.stringify(data[i]));
					i = i + 1;
				}
			},3000);
		});
		CSVToJSON().fromFile("data.csv").then( data => {
			let i = 0;
			setInterval(function() {
				if (i < data.length) {
					ws.send(JSON.stringify(data[i]));
					i = i + 1;
				}
			},3000);
		});


    } catch (e) {
        console.log(e);
    }
});
