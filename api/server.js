const serverless = require('serverless-http');
const app = require('../index');
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
module.exports.handler = serverless(app);