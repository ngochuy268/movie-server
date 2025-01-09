const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser'); 

const filmRoutes = require('./routes/filmRoutes');
const newsRoutes = require('./routes/newsRoutes');
const emailRoutes = require('./routes/emailRoutes');

app.use(cors({ 
    origin: ['http://localhost:3000', 'https://movie-client-cyan.vercel.app'], 
    methods: 'GET, POST', 
    allowedHeaders: 'Content-Type, Authorization',  }));

app.use(express.json());
app.use(bodyParser.json());

// Routes
app.use('/api/film', filmRoutes);
app.use('/api/news', newsRoutes);
app.use('/api', emailRoutes);


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
