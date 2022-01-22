const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Well hello pau pau! :D');

});

app.get('/test', (req, res) => {
	res.set('X-Full-Stack', '4-life');
	res.status(418);
	res.send('succesfully made');
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));





