import http from "node:http";
const server = http.createServer((_, response) => { response.setHeader("content-type", "application/json"); response.end(JSON.stringify({ service: "chainforge-api", status: "ok", height: 2 })); });
server.listen(8787, () => console.log("ChainForge API listening on :8787"));
