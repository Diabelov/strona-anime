const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 5000;

// Set up CORS middleware
app.use(cors({
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'application/json'],
}));
const startServer = () => {
    app.get('/anime/:title', async (req, res) => {
        const title = req.params.title;
        const url = `https://api.jikan.moe/v4/anime?q=${title}`;
            const response = await axios.get(url);
            const animeList = response.data.data.map(anime => ({
               imageUrl: anime.images.jpg.image_url,
                title: anime.title,
                malId: anime.mal_id
            }));
            res.send(animeList);
    });
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
    console.log('Server restarted!');
};
const handleException = (error) => {
    console.error(error);
    console.log('Restarting server...');
    setTimeout(() => {
        startServer();
    }, 10000);
};
startServer();
process.on('uncaughtException', handleException);
process.on('unhandledRejection', handleException);