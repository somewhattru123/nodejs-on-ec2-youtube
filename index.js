var http = require('http');
const PORT = process.env.PORT || 3000;
//create a server object:
http.createServer(function (req, res) {
  res.write('Welcome to CLOUD ASEEM  & Credit with Thanks to - A Monk in Cloud'); //write a response to the client
  res.end(); //end the response
}).listen(PORT); //the server object listens on port 80 , mention your port specific

