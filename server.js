const app = require('./app');

const port = 8002 || process.env.PORT;

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
