const serverJson = require("json-server");
const server = serverJson.create();
const router = serverJson.router("product.json");
const middleWare = serverJson.defaults();
const cors = require("cors");

server.use(cors());
server.use(middleWare);
server.use(router);

const PORT = 3000;
const HOST = "localhost";

server.listen(PORT, () => {
  console.log(`server running at http://${HOST}:${PORT}`);
});
