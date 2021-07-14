import fs from "fs";
import http from "http";
import os from "os"
const networkInterfaces = os.networkInterfaces();
const Ethernet = networkInterfaces.Ethernet
const host = Ethernet[Ethernet.length - 1].address

//const host = 'localhost';
const port = 8000;

const requestListener = function (req, res)
{
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);

    req.on('data', function (data)
    {
        console.log(JSON.parse(data));
    })

    res.end(fs.readFileSync("website.html"));

    console.log(req.method)
};

const server = http.createServer(requestListener);
server.listen(port, host, () =>
{
    console.log(`Server is running on http://${host}:${port}`);
});