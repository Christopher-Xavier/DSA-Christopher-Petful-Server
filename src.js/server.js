/* eslint-disable strict */

const app = require('./modules/app/app');
const port = process.env.PORT || 8080;

app.listen(3000, () => {
  console.log(`[petful-server] Listening on ${ port }.`);
});
