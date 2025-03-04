const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 8088;

// Configure Handlebars to use `.html` instead of `.hbs`
app.engine('html', engine({ extname: '.html',defaultLayout:false }));
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'public/templates'));

// Serve static files (CSS, JS, JSON)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',async(req,res)=>{
    const linksData = require('./public/links.json');
    res.render('template',linksData);
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
