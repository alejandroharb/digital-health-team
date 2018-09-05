const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000

app.use(express.static(__dirname + '/public'));

app.get('/*', (req, res) => {
  app.send(index.html);
});

app.listen(PORT, () => {
  console.log("listening in port: ", PORT)
});
