const express= require('express');
const app = express();
app.use(express.json())
app.get('/api/data', (req, res) => {
    res.json({message: 'Hello World'})
});

app.post('/api/data', (req, res) => {
    console.log(req.body);
    res.json({message: 'Data received'})
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});