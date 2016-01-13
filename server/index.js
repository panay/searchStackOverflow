var express = require('express'),
    app = express();

app.use(express.static('./'));
app.listen(7777);

console.log('server running');

