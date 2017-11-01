const path = require('path');
const express = require('express');

let app = express();
const port = process.env.PORT || 3000;

// Use static middleware
const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});