const express=require('express');
const app=express();
const path=require('path');
const fs=require('fs');

app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res)=>{
    fs.readdir(`./files`, (err, files) => {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        res.render("index",{files:files});
});
});

app.post('/create',(req,res)=>{
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`,req.body.details, (err) => {
        if (err) {
            return res.send("Error writing file: " + err);
        }
        res.redirect('/');
    }); 
})

app.get('/files/:filename', (req, res) => {
    const filepath = path.join(__dirname, 'files', req.params.filename);

    fs.readFile(filepath, 'utf-8', (err, data) => {
        if (err) {
            return res.send('Unable to read file');
        }

        res.render('details', {
            filename: req.params.filename,
            content: data
        });
    });
});

app.get('/edit/:filename',(req,res)=>{
        res.render('edit',{
            filename: req.params.filename
        });
    });
app.post('/edit',(req,res)=>{
    fs.rename(`./files/${req.body.previous}`,`./files/${req.body.new}.txt`, (err) => {
        if (err) {
            return res.send("Error renaming file: " + err);
        }
        res.redirect('/');
    });
})

app.listen(5000)