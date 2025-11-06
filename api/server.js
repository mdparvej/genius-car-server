const serverless = require('serverless-http');
const app = require('../index');
app.get('/', (req, res) => {
    res.send('Genius car server is running');
});
// Export a serverless handler for platforms that expect one
module.exports = app;
module.exports.handler = serverless(app);