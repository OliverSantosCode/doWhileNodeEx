import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Home');
});

app.get('/library', (req,res) => {
    res.send('Library');
});

app.get('/media', (req,res) => {
    res.send('Media');
});

app.get('/article', (req,res) => {
    res.send('Article');
});

app.listen(3000, () => {
    console.log('Running on PORT 3000')
});