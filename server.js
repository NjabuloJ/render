const express = require('express');
const app = express();
app.use(express.json());

app.post('/deploy', (req, res) => {
    // Your deployment logic here
    res.json({ message: 'Njabulo-Jb deployed successfully!' });
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
