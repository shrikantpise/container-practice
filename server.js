const express = require('express');
const app = express();
const PORT = 3001;

// Middleware to serve static files (CSS, Images) from a folder named 'public'
app.use(express.static('public'));

// Route for the home page (returns simple HTML)
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Sample Node.js App</title>
            <style>
                body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; background-color: #f4f4f9; }
                h1 { color: #333; }
                p { color: #666; }
                .btn { display: inline-block; padding: 10px 20px; color: white; background: #007cc7; text-decoration: none; border-radius: 5px; }
            </style>
        </head>
        <body>
            <h1>Welcome to Your Sample Node.js Web App!</h1>
            <p>This page is served dynamically by an Express.js server.</p>
            <a class="btn" href="/api/info">View API Endpoint</a>
        </body>
        </html>
    `);
});

// Route for a sample API endpoint (returns JSON data)
app.get('/api/info', (req, res) => {
    res.json({
        appName: "Sample Node.js Web App",
        version: "1.0.0",
        status: "Running smoothly",
        timestamp: new Date()
    });
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
    console.log(`🚀 Server is live at http://localhost:${PORT}`);
});

