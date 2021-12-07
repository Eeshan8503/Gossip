const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const opn = require('opn');
const server = require('./app');
const PORT=process.env.PORT || 443;
server.listen(443, () => {
  console.log(`Listening to port ${ 443}`);
});

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('Unhandled error occluded, shutting the server down');
  server.close(() => {
    process.exit(1);
  });
});

process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  console.log('Uncaught exception has occluded, shutting the server down');
  server.close(() => {
    process.exit(1);
  });
});
