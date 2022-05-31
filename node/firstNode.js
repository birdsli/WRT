var http =require('http');
var mysql=require('mysql');
var fs =require('fs');
var express =require('express');
var app =express();
console.log(mysql,'mysql')
// console.log(cwd(),'222')
console.log(process.cwd(),'aaa')

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials','true');
    next();
};

app.use(allowCrossDomain);
app.get('/listUsers', function (req, res,next) {
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        // console.log( data,'data' );
        var ab={}
        // res.send( {data:data.data,status:data.status,msg:data.statusText} );
        res.send(data)
    });
 })
 
 var server = app.listen(80, function () {
 
   var host = server.address().address
   var port = server.address().port
 
   console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
 })


// http.createServer((req,res)=>{
//      res.writeHead(200,{'content-Type':'text/plain'});
//      res.end('hello world\n')
// }).listen(8888);
// console.log('server is running 8888：')